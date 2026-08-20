# `configConformancePack` Submodule <a name="`configConformancePack` Submodule" id="@cdktn/provider-awscc.configConformancePack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigConformancePack <a name="ConfigConformancePack" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_conformance_pack awscc_config_conformance_pack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer"></a>

```typescript
import { configConformancePack } from '@cdktn/provider-awscc'

new configConformancePack.ConfigConformancePack(scope: Construct, id: string, config: ConfigConformancePackConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig">ConfigConformancePackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig">ConfigConformancePackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putConformancePackInputParameters">putConformancePackInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putTemplateSsmDocumentDetails">putTemplateSsmDocumentDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetConformancePackInputParameters">resetConformancePackInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetDeliveryS3Bucket">resetDeliveryS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetDeliveryS3KeyPrefix">resetDeliveryS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetTemplateBody">resetTemplateBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetTemplateS3Uri">resetTemplateS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetTemplateSsmDocumentDetails">resetTemplateSsmDocumentDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConformancePackInputParameters` <a name="putConformancePackInputParameters" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putConformancePackInputParameters"></a>

```typescript
public putConformancePackInputParameters(value: IResolvable | ConfigConformancePackConformancePackInputParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putConformancePackInputParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters">ConfigConformancePackConformancePackInputParameters</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putTags"></a>

```typescript
public putTags(value: IResolvable | ConfigConformancePackTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags">ConfigConformancePackTags</a>[]

---

##### `putTemplateSsmDocumentDetails` <a name="putTemplateSsmDocumentDetails" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putTemplateSsmDocumentDetails"></a>

```typescript
public putTemplateSsmDocumentDetails(value: ConfigConformancePackTemplateSsmDocumentDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putTemplateSsmDocumentDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails">ConfigConformancePackTemplateSsmDocumentDetails</a>

---

##### `resetConformancePackInputParameters` <a name="resetConformancePackInputParameters" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetConformancePackInputParameters"></a>

```typescript
public resetConformancePackInputParameters(): void
```

##### `resetDeliveryS3Bucket` <a name="resetDeliveryS3Bucket" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetDeliveryS3Bucket"></a>

```typescript
public resetDeliveryS3Bucket(): void
```

##### `resetDeliveryS3KeyPrefix` <a name="resetDeliveryS3KeyPrefix" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetDeliveryS3KeyPrefix"></a>

```typescript
public resetDeliveryS3KeyPrefix(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTemplateBody` <a name="resetTemplateBody" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetTemplateBody"></a>

```typescript
public resetTemplateBody(): void
```

##### `resetTemplateS3Uri` <a name="resetTemplateS3Uri" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetTemplateS3Uri"></a>

```typescript
public resetTemplateS3Uri(): void
```

##### `resetTemplateSsmDocumentDetails` <a name="resetTemplateSsmDocumentDetails" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetTemplateSsmDocumentDetails"></a>

```typescript
public resetTemplateSsmDocumentDetails(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigConformancePack resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isConstruct"></a>

```typescript
import { configConformancePack } from '@cdktn/provider-awscc'

configConformancePack.ConfigConformancePack.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isTerraformElement"></a>

```typescript
import { configConformancePack } from '@cdktn/provider-awscc'

configConformancePack.ConfigConformancePack.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isTerraformResource"></a>

```typescript
import { configConformancePack } from '@cdktn/provider-awscc'

configConformancePack.ConfigConformancePack.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.generateConfigForImport"></a>

```typescript
import { configConformancePack } from '@cdktn/provider-awscc'

configConformancePack.ConfigConformancePack.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConfigConformancePack resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigConformancePack to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigConformancePack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_conformance_pack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConfigConformancePack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackArn">conformancePackArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackInputParameters">conformancePackInputParameters</a></code> | <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList">ConfigConformancePackConformancePackInputParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList">ConfigConformancePackTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateSsmDocumentDetails">templateSsmDocumentDetails</a></code> | <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference">ConfigConformancePackTemplateSsmDocumentDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackInputParametersInput">conformancePackInputParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters">ConfigConformancePackConformancePackInputParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackNameInput">conformancePackNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.deliveryS3BucketInput">deliveryS3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.deliveryS3KeyPrefixInput">deliveryS3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags">ConfigConformancePackTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateBodyInput">templateBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateS3UriInput">templateS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateSsmDocumentDetailsInput">templateSsmDocumentDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails">ConfigConformancePackTemplateSsmDocumentDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackName">conformancePackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.deliveryS3Bucket">deliveryS3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.deliveryS3KeyPrefix">deliveryS3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateBody">templateBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateS3Uri">templateS3Uri</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `conformancePackArn`<sup>Required</sup> <a name="conformancePackArn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackArn"></a>

```typescript
public readonly conformancePackArn: string;
```

- *Type:* string

---

##### `conformancePackInputParameters`<sup>Required</sup> <a name="conformancePackInputParameters" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackInputParameters"></a>

```typescript
public readonly conformancePackInputParameters: ConfigConformancePackConformancePackInputParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList">ConfigConformancePackConformancePackInputParametersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.tags"></a>

```typescript
public readonly tags: ConfigConformancePackTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList">ConfigConformancePackTagsList</a>

---

##### `templateSsmDocumentDetails`<sup>Required</sup> <a name="templateSsmDocumentDetails" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateSsmDocumentDetails"></a>

```typescript
public readonly templateSsmDocumentDetails: ConfigConformancePackTemplateSsmDocumentDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference">ConfigConformancePackTemplateSsmDocumentDetailsOutputReference</a>

---

##### `conformancePackInputParametersInput`<sup>Optional</sup> <a name="conformancePackInputParametersInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackInputParametersInput"></a>

```typescript
public readonly conformancePackInputParametersInput: IResolvable | ConfigConformancePackConformancePackInputParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters">ConfigConformancePackConformancePackInputParameters</a>[]

---

##### `conformancePackNameInput`<sup>Optional</sup> <a name="conformancePackNameInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackNameInput"></a>

```typescript
public readonly conformancePackNameInput: string;
```

- *Type:* string

---

##### `deliveryS3BucketInput`<sup>Optional</sup> <a name="deliveryS3BucketInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.deliveryS3BucketInput"></a>

```typescript
public readonly deliveryS3BucketInput: string;
```

- *Type:* string

---

##### `deliveryS3KeyPrefixInput`<sup>Optional</sup> <a name="deliveryS3KeyPrefixInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.deliveryS3KeyPrefixInput"></a>

```typescript
public readonly deliveryS3KeyPrefixInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ConfigConformancePackTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags">ConfigConformancePackTags</a>[]

---

##### `templateBodyInput`<sup>Optional</sup> <a name="templateBodyInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateBodyInput"></a>

```typescript
public readonly templateBodyInput: string;
```

- *Type:* string

---

##### `templateS3UriInput`<sup>Optional</sup> <a name="templateS3UriInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateS3UriInput"></a>

```typescript
public readonly templateS3UriInput: string;
```

- *Type:* string

---

##### `templateSsmDocumentDetailsInput`<sup>Optional</sup> <a name="templateSsmDocumentDetailsInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateSsmDocumentDetailsInput"></a>

```typescript
public readonly templateSsmDocumentDetailsInput: IResolvable | ConfigConformancePackTemplateSsmDocumentDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails">ConfigConformancePackTemplateSsmDocumentDetails</a>

---

##### `conformancePackName`<sup>Required</sup> <a name="conformancePackName" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackName"></a>

```typescript
public readonly conformancePackName: string;
```

- *Type:* string

---

##### `deliveryS3Bucket`<sup>Required</sup> <a name="deliveryS3Bucket" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.deliveryS3Bucket"></a>

```typescript
public readonly deliveryS3Bucket: string;
```

- *Type:* string

---

##### `deliveryS3KeyPrefix`<sup>Required</sup> <a name="deliveryS3KeyPrefix" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.deliveryS3KeyPrefix"></a>

```typescript
public readonly deliveryS3KeyPrefix: string;
```

- *Type:* string

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateBody"></a>

```typescript
public readonly templateBody: string;
```

- *Type:* string

---

##### `templateS3Uri`<sup>Required</sup> <a name="templateS3Uri" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateS3Uri"></a>

```typescript
public readonly templateS3Uri: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConformancePackConfig <a name="ConfigConformancePackConfig" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.Initializer"></a>

```typescript
import { configConformancePack } from '@cdktn/provider-awscc'

const configConformancePackConfig: configConformancePack.ConfigConformancePackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.conformancePackName">conformancePackName</a></code> | <code>string</code> | Name of the conformance pack which will be assigned as the unique identifier. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.conformancePackInputParameters">conformancePackInputParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters">ConfigConformancePackConformancePackInputParameters</a>[]</code> | A list of ConformancePackInputParameter objects. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.deliveryS3Bucket">deliveryS3Bucket</a></code> | <code>string</code> | AWS Config stores intermediate files while processing conformance pack template. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.deliveryS3KeyPrefix">deliveryS3KeyPrefix</a></code> | <code>string</code> | The prefix for delivery S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags">ConfigConformancePackTags</a>[]</code> | The tags for the conformance pack. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.templateBody">templateBody</a></code> | <code>string</code> | A string containing full conformance pack template body. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.templateS3Uri">templateS3Uri</a></code> | <code>string</code> | Location of file containing the template body which points to the conformance pack template that is located in an Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.templateSsmDocumentDetails">templateSsmDocumentDetails</a></code> | <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails">ConfigConformancePackTemplateSsmDocumentDetails</a></code> | The TemplateSSMDocumentDetails object contains the name of the SSM document and the version of the SSM document. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `conformancePackName`<sup>Required</sup> <a name="conformancePackName" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.conformancePackName"></a>

```typescript
public readonly conformancePackName: string;
```

- *Type:* string

Name of the conformance pack which will be assigned as the unique identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_conformance_pack#conformance_pack_name ConfigConformancePack#conformance_pack_name}

---

##### `conformancePackInputParameters`<sup>Optional</sup> <a name="conformancePackInputParameters" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.conformancePackInputParameters"></a>

```typescript
public readonly conformancePackInputParameters: IResolvable | ConfigConformancePackConformancePackInputParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters">ConfigConformancePackConformancePackInputParameters</a>[]

A list of ConformancePackInputParameter objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_conformance_pack#conformance_pack_input_parameters ConfigConformancePack#conformance_pack_input_parameters}

---

##### `deliveryS3Bucket`<sup>Optional</sup> <a name="deliveryS3Bucket" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.deliveryS3Bucket"></a>

```typescript
public readonly deliveryS3Bucket: string;
```

- *Type:* string

AWS Config stores intermediate files while processing conformance pack template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_conformance_pack#delivery_s3_bucket ConfigConformancePack#delivery_s3_bucket}

---

##### `deliveryS3KeyPrefix`<sup>Optional</sup> <a name="deliveryS3KeyPrefix" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.deliveryS3KeyPrefix"></a>

```typescript
public readonly deliveryS3KeyPrefix: string;
```

- *Type:* string

The prefix for delivery S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_conformance_pack#delivery_s3_key_prefix ConfigConformancePack#delivery_s3_key_prefix}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ConfigConformancePackTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags">ConfigConformancePackTags</a>[]

The tags for the conformance pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_conformance_pack#tags ConfigConformancePack#tags}

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.templateBody"></a>

```typescript
public readonly templateBody: string;
```

- *Type:* string

A string containing full conformance pack template body.

You can only specify one of the template body or template S3Uri fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_conformance_pack#template_body ConfigConformancePack#template_body}

---

##### `templateS3Uri`<sup>Optional</sup> <a name="templateS3Uri" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.templateS3Uri"></a>

```typescript
public readonly templateS3Uri: string;
```

- *Type:* string

Location of file containing the template body which points to the conformance pack template that is located in an Amazon S3 bucket.

You can only specify one of the template body or template S3Uri fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_conformance_pack#template_s3_uri ConfigConformancePack#template_s3_uri}

---

##### `templateSsmDocumentDetails`<sup>Optional</sup> <a name="templateSsmDocumentDetails" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.templateSsmDocumentDetails"></a>

```typescript
public readonly templateSsmDocumentDetails: ConfigConformancePackTemplateSsmDocumentDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails">ConfigConformancePackTemplateSsmDocumentDetails</a>

The TemplateSSMDocumentDetails object contains the name of the SSM document and the version of the SSM document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_conformance_pack#template_ssm_document_details ConfigConformancePack#template_ssm_document_details}

---

### ConfigConformancePackConformancePackInputParameters <a name="ConfigConformancePackConformancePackInputParameters" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters.Initializer"></a>

```typescript
import { configConformancePack } from '@cdktn/provider-awscc'

const configConformancePackConformancePackInputParameters: configConformancePack.ConfigConformancePackConformancePackInputParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters.property.parameterName">parameterName</a></code> | <code>string</code> | Key part of key-value pair with value being parameter value. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters.property.parameterValue">parameterValue</a></code> | <code>string</code> | Value part of key-value pair with key being parameter Name. |

---

##### `parameterName`<sup>Optional</sup> <a name="parameterName" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

Key part of key-value pair with value being parameter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_conformance_pack#parameter_name ConfigConformancePack#parameter_name}

---

##### `parameterValue`<sup>Optional</sup> <a name="parameterValue" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

Value part of key-value pair with key being parameter Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_conformance_pack#parameter_value ConfigConformancePack#parameter_value}

---

### ConfigConformancePackTags <a name="ConfigConformancePackTags" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags.Initializer"></a>

```typescript
import { configConformancePack } from '@cdktn/provider-awscc'

const configConformancePackTags: configConformancePack.ConfigConformancePackTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_conformance_pack#key ConfigConformancePack#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_conformance_pack#value ConfigConformancePack#value}

---

### ConfigConformancePackTemplateSsmDocumentDetails <a name="ConfigConformancePackTemplateSsmDocumentDetails" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails.Initializer"></a>

```typescript
import { configConformancePack } from '@cdktn/provider-awscc'

const configConformancePackTemplateSsmDocumentDetails: configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails.property.documentName">documentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_conformance_pack#document_name ConfigConformancePack#document_name}. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails.property.documentVersion">documentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_conformance_pack#document_version ConfigConformancePack#document_version}. |

---

##### `documentName`<sup>Optional</sup> <a name="documentName" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_conformance_pack#document_name ConfigConformancePack#document_name}.

---

##### `documentVersion`<sup>Optional</sup> <a name="documentVersion" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails.property.documentVersion"></a>

```typescript
public readonly documentVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_conformance_pack#document_version ConfigConformancePack#document_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigConformancePackConformancePackInputParametersList <a name="ConfigConformancePackConformancePackInputParametersList" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.Initializer"></a>

```typescript
import { configConformancePack } from '@cdktn/provider-awscc'

new configConformancePack.ConfigConformancePackConformancePackInputParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.get"></a>

```typescript
public get(index: number): ConfigConformancePackConformancePackInputParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters">ConfigConformancePackConformancePackInputParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigConformancePackConformancePackInputParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters">ConfigConformancePackConformancePackInputParameters</a>[]

---


### ConfigConformancePackConformancePackInputParametersOutputReference <a name="ConfigConformancePackConformancePackInputParametersOutputReference" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer"></a>

```typescript
import { configConformancePack } from '@cdktn/provider-awscc'

new configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.resetParameterName">resetParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.resetParameterValue">resetParameterValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameterName` <a name="resetParameterName" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.resetParameterName"></a>

```typescript
public resetParameterName(): void
```

##### `resetParameterValue` <a name="resetParameterValue" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.resetParameterValue"></a>

```typescript
public resetParameterValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.parameterNameInput">parameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.parameterValue">parameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters">ConfigConformancePackConformancePackInputParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterNameInput`<sup>Optional</sup> <a name="parameterNameInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.parameterNameInput"></a>

```typescript
public readonly parameterNameInput: string;
```

- *Type:* string

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.parameterValueInput"></a>

```typescript
public readonly parameterValueInput: string;
```

- *Type:* string

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigConformancePackConformancePackInputParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters">ConfigConformancePackConformancePackInputParameters</a>

---


### ConfigConformancePackTagsList <a name="ConfigConformancePackTagsList" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.Initializer"></a>

```typescript
import { configConformancePack } from '@cdktn/provider-awscc'

new configConformancePack.ConfigConformancePackTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.get"></a>

```typescript
public get(index: number): ConfigConformancePackTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags">ConfigConformancePackTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigConformancePackTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags">ConfigConformancePackTags</a>[]

---


### ConfigConformancePackTagsOutputReference <a name="ConfigConformancePackTagsOutputReference" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer"></a>

```typescript
import { configConformancePack } from '@cdktn/provider-awscc'

new configConformancePack.ConfigConformancePackTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags">ConfigConformancePackTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigConformancePackTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags">ConfigConformancePackTags</a>

---


### ConfigConformancePackTemplateSsmDocumentDetailsOutputReference <a name="ConfigConformancePackTemplateSsmDocumentDetailsOutputReference" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.Initializer"></a>

```typescript
import { configConformancePack } from '@cdktn/provider-awscc'

new configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.resetDocumentName">resetDocumentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.resetDocumentVersion">resetDocumentVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDocumentName` <a name="resetDocumentName" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.resetDocumentName"></a>

```typescript
public resetDocumentName(): void
```

##### `resetDocumentVersion` <a name="resetDocumentVersion" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.resetDocumentVersion"></a>

```typescript
public resetDocumentVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.documentNameInput">documentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.documentVersionInput">documentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.documentName">documentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.documentVersion">documentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails">ConfigConformancePackTemplateSsmDocumentDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `documentNameInput`<sup>Optional</sup> <a name="documentNameInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.documentNameInput"></a>

```typescript
public readonly documentNameInput: string;
```

- *Type:* string

---

##### `documentVersionInput`<sup>Optional</sup> <a name="documentVersionInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.documentVersionInput"></a>

```typescript
public readonly documentVersionInput: string;
```

- *Type:* string

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

---

##### `documentVersion`<sup>Required</sup> <a name="documentVersion" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.documentVersion"></a>

```typescript
public readonly documentVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigConformancePackTemplateSsmDocumentDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails">ConfigConformancePackTemplateSsmDocumentDetails</a>

---



