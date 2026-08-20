# `ec2NetworkInsightsAccessScopeAnalysis` Submodule <a name="`ec2NetworkInsightsAccessScopeAnalysis` Submodule" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2NetworkInsightsAccessScopeAnalysis <a name="Ec2NetworkInsightsAccessScopeAnalysis" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_access_scope_analysis awscc_ec2_network_insights_access_scope_analysis}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScopeAnalysis } from '@cdktn/provider-awscc'

new ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis(scope: Construct, id: string, config: Ec2NetworkInsightsAccessScopeAnalysisConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig">Ec2NetworkInsightsAccessScopeAnalysisConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig">Ec2NetworkInsightsAccessScopeAnalysisConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2NetworkInsightsAccessScopeAnalysisTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags">Ec2NetworkInsightsAccessScopeAnalysisTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2NetworkInsightsAccessScopeAnalysis resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isConstruct"></a>

```typescript
import { ec2NetworkInsightsAccessScopeAnalysis } from '@cdktn/provider-awscc'

ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isTerraformElement"></a>

```typescript
import { ec2NetworkInsightsAccessScopeAnalysis } from '@cdktn/provider-awscc'

ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isTerraformResource"></a>

```typescript
import { ec2NetworkInsightsAccessScopeAnalysis } from '@cdktn/provider-awscc'

ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.generateConfigForImport"></a>

```typescript
import { ec2NetworkInsightsAccessScopeAnalysis } from '@cdktn/provider-awscc'

ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2NetworkInsightsAccessScopeAnalysis resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2NetworkInsightsAccessScopeAnalysis to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2NetworkInsightsAccessScopeAnalysis that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_access_scope_analysis#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2NetworkInsightsAccessScopeAnalysis to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.analyzedEniCount">analyzedEniCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.findingsFound">findingsFound</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeAnalysisArn">networkInsightsAccessScopeAnalysisArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeAnalysisId">networkInsightsAccessScopeAnalysisId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList">Ec2NetworkInsightsAccessScopeAnalysisTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeIdInput">networkInsightsAccessScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags">Ec2NetworkInsightsAccessScopeAnalysisTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeId">networkInsightsAccessScopeId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `analyzedEniCount`<sup>Required</sup> <a name="analyzedEniCount" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.analyzedEniCount"></a>

```typescript
public readonly analyzedEniCount: number;
```

- *Type:* number

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `findingsFound`<sup>Required</sup> <a name="findingsFound" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.findingsFound"></a>

```typescript
public readonly findingsFound: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkInsightsAccessScopeAnalysisArn`<sup>Required</sup> <a name="networkInsightsAccessScopeAnalysisArn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeAnalysisArn"></a>

```typescript
public readonly networkInsightsAccessScopeAnalysisArn: string;
```

- *Type:* string

---

##### `networkInsightsAccessScopeAnalysisId`<sup>Required</sup> <a name="networkInsightsAccessScopeAnalysisId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeAnalysisId"></a>

```typescript
public readonly networkInsightsAccessScopeAnalysisId: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.tags"></a>

```typescript
public readonly tags: Ec2NetworkInsightsAccessScopeAnalysisTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList">Ec2NetworkInsightsAccessScopeAnalysisTagsList</a>

---

##### `networkInsightsAccessScopeIdInput`<sup>Optional</sup> <a name="networkInsightsAccessScopeIdInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeIdInput"></a>

```typescript
public readonly networkInsightsAccessScopeIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2NetworkInsightsAccessScopeAnalysisTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags">Ec2NetworkInsightsAccessScopeAnalysisTags</a>[]

---

##### `networkInsightsAccessScopeId`<sup>Required</sup> <a name="networkInsightsAccessScopeId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeId"></a>

```typescript
public readonly networkInsightsAccessScopeId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2NetworkInsightsAccessScopeAnalysisConfig <a name="Ec2NetworkInsightsAccessScopeAnalysisConfig" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScopeAnalysis } from '@cdktn/provider-awscc'

const ec2NetworkInsightsAccessScopeAnalysisConfig: ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.networkInsightsAccessScopeId">networkInsightsAccessScopeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_access_scope_analysis#network_insights_access_scope_id Ec2NetworkInsightsAccessScopeAnalysis#network_insights_access_scope_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags">Ec2NetworkInsightsAccessScopeAnalysisTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_access_scope_analysis#tags Ec2NetworkInsightsAccessScopeAnalysis#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `networkInsightsAccessScopeId`<sup>Required</sup> <a name="networkInsightsAccessScopeId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.networkInsightsAccessScopeId"></a>

```typescript
public readonly networkInsightsAccessScopeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_access_scope_analysis#network_insights_access_scope_id Ec2NetworkInsightsAccessScopeAnalysis#network_insights_access_scope_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2NetworkInsightsAccessScopeAnalysisTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags">Ec2NetworkInsightsAccessScopeAnalysisTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_access_scope_analysis#tags Ec2NetworkInsightsAccessScopeAnalysis#tags}.

---

### Ec2NetworkInsightsAccessScopeAnalysisTags <a name="Ec2NetworkInsightsAccessScopeAnalysisTags" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScopeAnalysis } from '@cdktn/provider-awscc'

const ec2NetworkInsightsAccessScopeAnalysisTags: ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_access_scope_analysis#key Ec2NetworkInsightsAccessScopeAnalysis#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_access_scope_analysis#value Ec2NetworkInsightsAccessScopeAnalysis#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_access_scope_analysis#key Ec2NetworkInsightsAccessScopeAnalysis#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_access_scope_analysis#value Ec2NetworkInsightsAccessScopeAnalysis#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2NetworkInsightsAccessScopeAnalysisTagsList <a name="Ec2NetworkInsightsAccessScopeAnalysisTagsList" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScopeAnalysis } from '@cdktn/provider-awscc'

new ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.get"></a>

```typescript
public get(index: number): Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags">Ec2NetworkInsightsAccessScopeAnalysisTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeAnalysisTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags">Ec2NetworkInsightsAccessScopeAnalysisTags</a>[]

---


### Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference <a name="Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScopeAnalysis } from '@cdktn/provider-awscc'

new ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags">Ec2NetworkInsightsAccessScopeAnalysisTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeAnalysisTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags">Ec2NetworkInsightsAccessScopeAnalysisTags</a>

---



