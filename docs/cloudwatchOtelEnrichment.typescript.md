# `cloudwatchOtelEnrichment` Submodule <a name="`cloudwatchOtelEnrichment` Submodule" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchOtelEnrichment <a name="CloudwatchOtelEnrichment" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment awscc_cloudwatch_otel_enrichment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-awscc'

new cloudwatchOtelEnrichment.CloudwatchOtelEnrichment(scope: Construct, id: string, config?: CloudwatchOtelEnrichmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig">CloudwatchOtelEnrichmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig">CloudwatchOtelEnrichmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putExcludeFilters">putExcludeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putIncludeFilters">putIncludeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetExcludeFilters">resetExcludeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetIncludeFilters">resetIncludeFilters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExcludeFilters` <a name="putExcludeFilters" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putExcludeFilters"></a>

```typescript
public putExcludeFilters(value: IResolvable | CloudwatchOtelEnrichmentExcludeFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putExcludeFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilters">CloudwatchOtelEnrichmentExcludeFilters</a>[]

---

##### `putIncludeFilters` <a name="putIncludeFilters" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putIncludeFilters"></a>

```typescript
public putIncludeFilters(value: IResolvable | CloudwatchOtelEnrichmentIncludeFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putIncludeFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilters">CloudwatchOtelEnrichmentIncludeFilters</a>[]

---

##### `resetExcludeFilters` <a name="resetExcludeFilters" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetExcludeFilters"></a>

```typescript
public resetExcludeFilters(): void
```

##### `resetIncludeFilters` <a name="resetIncludeFilters" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetIncludeFilters"></a>

```typescript
public resetIncludeFilters(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchOtelEnrichment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isConstruct"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-awscc'

cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformElement"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-awscc'

cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformResource"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-awscc'

cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-awscc'

cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudwatchOtelEnrichment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchOtelEnrichment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchOtelEnrichment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchOtelEnrichment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.excludeFilters">excludeFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList">CloudwatchOtelEnrichmentExcludeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.includeFilters">includeFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList">CloudwatchOtelEnrichmentIncludeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.excludeFiltersInput">excludeFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilters">CloudwatchOtelEnrichmentExcludeFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.includeFiltersInput">includeFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilters">CloudwatchOtelEnrichmentIncludeFilters</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `excludeFilters`<sup>Required</sup> <a name="excludeFilters" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.excludeFilters"></a>

```typescript
public readonly excludeFilters: CloudwatchOtelEnrichmentExcludeFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList">CloudwatchOtelEnrichmentExcludeFiltersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeFilters`<sup>Required</sup> <a name="includeFilters" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.includeFilters"></a>

```typescript
public readonly includeFilters: CloudwatchOtelEnrichmentIncludeFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList">CloudwatchOtelEnrichmentIncludeFiltersList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `excludeFiltersInput`<sup>Optional</sup> <a name="excludeFiltersInput" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.excludeFiltersInput"></a>

```typescript
public readonly excludeFiltersInput: IResolvable | CloudwatchOtelEnrichmentExcludeFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilters">CloudwatchOtelEnrichmentExcludeFilters</a>[]

---

##### `includeFiltersInput`<sup>Optional</sup> <a name="includeFiltersInput" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.includeFiltersInput"></a>

```typescript
public readonly includeFiltersInput: IResolvable | CloudwatchOtelEnrichmentIncludeFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilters">CloudwatchOtelEnrichmentIncludeFilters</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchOtelEnrichmentConfig <a name="CloudwatchOtelEnrichmentConfig" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.Initializer"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-awscc'

const cloudwatchOtelEnrichmentConfig: cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.excludeFilters">excludeFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilters">CloudwatchOtelEnrichmentExcludeFilters</a>[]</code> | Removes metrics from the include set. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.includeFilters">includeFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilters">CloudwatchOtelEnrichmentIncludeFilters</a>[]</code> | Scopes enrichment to a subset of the account's telemetry. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `excludeFilters`<sup>Optional</sup> <a name="excludeFilters" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.excludeFilters"></a>

```typescript
public readonly excludeFilters: IResolvable | CloudwatchOtelEnrichmentExcludeFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilters">CloudwatchOtelEnrichmentExcludeFilters</a>[]

Removes metrics from the include set.

Absent or empty means nothing is removed. Evaluated after IncludeFilters, so ExcludeFilters always wins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment#exclude_filters CloudwatchOtelEnrichment#exclude_filters}

---

##### `includeFilters`<sup>Optional</sup> <a name="includeFilters" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.includeFilters"></a>

```typescript
public readonly includeFilters: IResolvable | CloudwatchOtelEnrichmentIncludeFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilters">CloudwatchOtelEnrichmentIncludeFilters</a>[]

Scopes enrichment to a subset of the account's telemetry.

Absent or empty means all namespaces are in scope. Present means only these are. The service enforces a combined cap of 100 selectors across IncludeFilters and ExcludeFilters, and rejects more than one selector for the same namespace within a direction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment#include_filters CloudwatchOtelEnrichment#include_filters}

---

### CloudwatchOtelEnrichmentExcludeFilters <a name="CloudwatchOtelEnrichmentExcludeFilters" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilters.Initializer"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-awscc'

const cloudwatchOtelEnrichmentExcludeFilters: cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilters.property.metricNames">metricNames</a></code> | <code>string[]</code> | Absent or empty means every metric in this namespace, in whichever direction this selector appears. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilters.property.namespace">namespace</a></code> | <code>string</code> | The CloudWatch namespace this selector applies to. |

---

##### `metricNames`<sup>Optional</sup> <a name="metricNames" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilters.property.metricNames"></a>

```typescript
public readonly metricNames: string[];
```

- *Type:* string[]

Absent or empty means every metric in this namespace, in whichever direction this selector appears.

Present means only these metric names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment#metric_names CloudwatchOtelEnrichment#metric_names}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilters.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The CloudWatch namespace this selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment#namespace CloudwatchOtelEnrichment#namespace}

---

### CloudwatchOtelEnrichmentIncludeFilters <a name="CloudwatchOtelEnrichmentIncludeFilters" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilters.Initializer"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-awscc'

const cloudwatchOtelEnrichmentIncludeFilters: cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilters.property.metricNames">metricNames</a></code> | <code>string[]</code> | Absent or empty means every metric in this namespace, in whichever direction this selector appears. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilters.property.namespace">namespace</a></code> | <code>string</code> | The CloudWatch namespace this selector applies to. |

---

##### `metricNames`<sup>Optional</sup> <a name="metricNames" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilters.property.metricNames"></a>

```typescript
public readonly metricNames: string[];
```

- *Type:* string[]

Absent or empty means every metric in this namespace, in whichever direction this selector appears.

Present means only these metric names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment#metric_names CloudwatchOtelEnrichment#metric_names}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilters.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The CloudWatch namespace this selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment#namespace CloudwatchOtelEnrichment#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchOtelEnrichmentExcludeFiltersList <a name="CloudwatchOtelEnrichmentExcludeFiltersList" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.Initializer"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-awscc'

new cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.get"></a>

```typescript
public get(index: number): CloudwatchOtelEnrichmentExcludeFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilters">CloudwatchOtelEnrichmentExcludeFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchOtelEnrichmentExcludeFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilters">CloudwatchOtelEnrichmentExcludeFilters</a>[]

---


### CloudwatchOtelEnrichmentExcludeFiltersOutputReference <a name="CloudwatchOtelEnrichmentExcludeFiltersOutputReference" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-awscc'

new cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.resetMetricNames">resetMetricNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricNames` <a name="resetMetricNames" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.resetMetricNames"></a>

```typescript
public resetMetricNames(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.metricNamesInput">metricNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.metricNames">metricNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilters">CloudwatchOtelEnrichmentExcludeFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricNamesInput`<sup>Optional</sup> <a name="metricNamesInput" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.metricNamesInput"></a>

```typescript
public readonly metricNamesInput: string[];
```

- *Type:* string[]

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `metricNames`<sup>Required</sup> <a name="metricNames" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.metricNames"></a>

```typescript
public readonly metricNames: string[];
```

- *Type:* string[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchOtelEnrichmentExcludeFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilters">CloudwatchOtelEnrichmentExcludeFilters</a>

---


### CloudwatchOtelEnrichmentIncludeFiltersList <a name="CloudwatchOtelEnrichmentIncludeFiltersList" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.Initializer"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-awscc'

new cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.get"></a>

```typescript
public get(index: number): CloudwatchOtelEnrichmentIncludeFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilters">CloudwatchOtelEnrichmentIncludeFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchOtelEnrichmentIncludeFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilters">CloudwatchOtelEnrichmentIncludeFilters</a>[]

---


### CloudwatchOtelEnrichmentIncludeFiltersOutputReference <a name="CloudwatchOtelEnrichmentIncludeFiltersOutputReference" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-awscc'

new cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.resetMetricNames">resetMetricNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricNames` <a name="resetMetricNames" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.resetMetricNames"></a>

```typescript
public resetMetricNames(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.metricNamesInput">metricNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.metricNames">metricNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilters">CloudwatchOtelEnrichmentIncludeFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricNamesInput`<sup>Optional</sup> <a name="metricNamesInput" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.metricNamesInput"></a>

```typescript
public readonly metricNamesInput: string[];
```

- *Type:* string[]

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `metricNames`<sup>Required</sup> <a name="metricNames" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.metricNames"></a>

```typescript
public readonly metricNames: string[];
```

- *Type:* string[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchOtelEnrichmentIncludeFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilters">CloudwatchOtelEnrichmentIncludeFilters</a>

---



