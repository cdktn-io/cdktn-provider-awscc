# `appintegrationsEventIntegration` Submodule <a name="`appintegrationsEventIntegration` Submodule" id="@cdktn/provider-awscc.appintegrationsEventIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppintegrationsEventIntegration <a name="AppintegrationsEventIntegration" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appintegrations_event_integration awscc_appintegrations_event_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer"></a>

```typescript
import { appintegrationsEventIntegration } from '@cdktn/provider-awscc'

new appintegrationsEventIntegration.AppintegrationsEventIntegration(scope: Construct, id: string, config: AppintegrationsEventIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig">AppintegrationsEventIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig">AppintegrationsEventIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.putEventFilter">putEventFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEventFilter` <a name="putEventFilter" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.putEventFilter"></a>

```typescript
public putEventFilter(value: AppintegrationsEventIntegrationEventFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.putEventFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.putTags"></a>

```typescript
public putTags(value: IResolvable | AppintegrationsEventIntegrationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTags">AppintegrationsEventIntegrationTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppintegrationsEventIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.isConstruct"></a>

```typescript
import { appintegrationsEventIntegration } from '@cdktn/provider-awscc'

appintegrationsEventIntegration.AppintegrationsEventIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformElement"></a>

```typescript
import { appintegrationsEventIntegration } from '@cdktn/provider-awscc'

appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformResource"></a>

```typescript
import { appintegrationsEventIntegration } from '@cdktn/provider-awscc'

appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.generateConfigForImport"></a>

```typescript
import { appintegrationsEventIntegration } from '@cdktn/provider-awscc'

appintegrationsEventIntegration.AppintegrationsEventIntegration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppintegrationsEventIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppintegrationsEventIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppintegrationsEventIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appintegrations_event_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppintegrationsEventIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventFilter">eventFilter</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference">AppintegrationsEventIntegrationEventFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventIntegrationArn">eventIntegrationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList">AppintegrationsEventIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventBridgeBusInput">eventBridgeBusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventFilterInput">eventFilterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTags">AppintegrationsEventIntegrationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventBridgeBus">eventBridgeBus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `eventFilter`<sup>Required</sup> <a name="eventFilter" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventFilter"></a>

```typescript
public readonly eventFilter: AppintegrationsEventIntegrationEventFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference">AppintegrationsEventIntegrationEventFilterOutputReference</a>

---

##### `eventIntegrationArn`<sup>Required</sup> <a name="eventIntegrationArn" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventIntegrationArn"></a>

```typescript
public readonly eventIntegrationArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tags"></a>

```typescript
public readonly tags: AppintegrationsEventIntegrationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList">AppintegrationsEventIntegrationTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `eventBridgeBusInput`<sup>Optional</sup> <a name="eventBridgeBusInput" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventBridgeBusInput"></a>

```typescript
public readonly eventBridgeBusInput: string;
```

- *Type:* string

---

##### `eventFilterInput`<sup>Optional</sup> <a name="eventFilterInput" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventFilterInput"></a>

```typescript
public readonly eventFilterInput: IResolvable | AppintegrationsEventIntegrationEventFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AppintegrationsEventIntegrationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTags">AppintegrationsEventIntegrationTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `eventBridgeBus`<sup>Required</sup> <a name="eventBridgeBus" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventBridgeBus"></a>

```typescript
public readonly eventBridgeBus: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppintegrationsEventIntegrationConfig <a name="AppintegrationsEventIntegrationConfig" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.Initializer"></a>

```typescript
import { appintegrationsEventIntegration } from '@cdktn/provider-awscc'

const appintegrationsEventIntegrationConfig: appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.eventBridgeBus">eventBridgeBus</a></code> | <code>string</code> | The Amazon Eventbridge bus for the event integration. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.eventFilter">eventFilter</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a></code> | The EventFilter (source) associated with the event integration. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.name">name</a></code> | <code>string</code> | The name of the event integration. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.description">description</a></code> | <code>string</code> | The event integration description. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTags">AppintegrationsEventIntegrationTags</a>[]</code> | The tags (keys and values) associated with the event integration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `eventBridgeBus`<sup>Required</sup> <a name="eventBridgeBus" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.eventBridgeBus"></a>

```typescript
public readonly eventBridgeBus: string;
```

- *Type:* string

The Amazon Eventbridge bus for the event integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appintegrations_event_integration#event_bridge_bus AppintegrationsEventIntegration#event_bridge_bus}

---

##### `eventFilter`<sup>Required</sup> <a name="eventFilter" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.eventFilter"></a>

```typescript
public readonly eventFilter: AppintegrationsEventIntegrationEventFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a>

The EventFilter (source) associated with the event integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appintegrations_event_integration#event_filter AppintegrationsEventIntegration#event_filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the event integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appintegrations_event_integration#name AppintegrationsEventIntegration#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The event integration description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appintegrations_event_integration#description AppintegrationsEventIntegration#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | AppintegrationsEventIntegrationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTags">AppintegrationsEventIntegrationTags</a>[]

The tags (keys and values) associated with the event integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appintegrations_event_integration#tags AppintegrationsEventIntegration#tags}

---

### AppintegrationsEventIntegrationEventFilter <a name="AppintegrationsEventIntegrationEventFilter" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter.Initializer"></a>

```typescript
import { appintegrationsEventIntegration } from '@cdktn/provider-awscc'

const appintegrationsEventIntegrationEventFilter: appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter.property.source">source</a></code> | <code>string</code> | The source of the events. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

The source of the events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appintegrations_event_integration#source AppintegrationsEventIntegration#source}

---

### AppintegrationsEventIntegrationTags <a name="AppintegrationsEventIntegrationTags" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTags.Initializer"></a>

```typescript
import { appintegrationsEventIntegration } from '@cdktn/provider-awscc'

const appintegrationsEventIntegrationTags: appintegrationsEventIntegration.AppintegrationsEventIntegrationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTags.property.key">key</a></code> | <code>string</code> | A key to identify the tag. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTags.property.value">value</a></code> | <code>string</code> | Corresponding tag value for the key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A key to identify the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appintegrations_event_integration#key AppintegrationsEventIntegration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Corresponding tag value for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appintegrations_event_integration#value AppintegrationsEventIntegration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppintegrationsEventIntegrationEventFilterOutputReference <a name="AppintegrationsEventIntegrationEventFilterOutputReference" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer"></a>

```typescript
import { appintegrationsEventIntegration } from '@cdktn/provider-awscc'

new appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppintegrationsEventIntegrationEventFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a>

---


### AppintegrationsEventIntegrationTagsList <a name="AppintegrationsEventIntegrationTagsList" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.Initializer"></a>

```typescript
import { appintegrationsEventIntegration } from '@cdktn/provider-awscc'

new appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.get"></a>

```typescript
public get(index: number): AppintegrationsEventIntegrationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTags">AppintegrationsEventIntegrationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppintegrationsEventIntegrationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTags">AppintegrationsEventIntegrationTags</a>[]

---


### AppintegrationsEventIntegrationTagsOutputReference <a name="AppintegrationsEventIntegrationTagsOutputReference" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.Initializer"></a>

```typescript
import { appintegrationsEventIntegration } from '@cdktn/provider-awscc'

new appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTags">AppintegrationsEventIntegrationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppintegrationsEventIntegrationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsEventIntegration.AppintegrationsEventIntegrationTags">AppintegrationsEventIntegrationTags</a>

---



