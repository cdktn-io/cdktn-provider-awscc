# `lookoutmetricsAlert` Submodule <a name="`lookoutmetricsAlert` Submodule" id="@cdktn/provider-awscc.lookoutmetricsAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LookoutmetricsAlert <a name="LookoutmetricsAlert" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_alert awscc_lookoutmetrics_alert}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer"></a>

```typescript
import { lookoutmetricsAlert } from '@cdktn/provider-awscc'

new lookoutmetricsAlert.LookoutmetricsAlert(scope: Construct, id: string, config: LookoutmetricsAlertConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig">LookoutmetricsAlertConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig">LookoutmetricsAlertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.resetAlertDescription">resetAlertDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.resetAlertName">resetAlertName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.putAction"></a>

```typescript
public putAction(value: LookoutmetricsAlertAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a>

---

##### `resetAlertDescription` <a name="resetAlertDescription" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.resetAlertDescription"></a>

```typescript
public resetAlertDescription(): void
```

##### `resetAlertName` <a name="resetAlertName" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.resetAlertName"></a>

```typescript
public resetAlertName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LookoutmetricsAlert resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isConstruct"></a>

```typescript
import { lookoutmetricsAlert } from '@cdktn/provider-awscc'

lookoutmetricsAlert.LookoutmetricsAlert.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isTerraformElement"></a>

```typescript
import { lookoutmetricsAlert } from '@cdktn/provider-awscc'

lookoutmetricsAlert.LookoutmetricsAlert.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isTerraformResource"></a>

```typescript
import { lookoutmetricsAlert } from '@cdktn/provider-awscc'

lookoutmetricsAlert.LookoutmetricsAlert.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport"></a>

```typescript
import { lookoutmetricsAlert } from '@cdktn/provider-awscc'

lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LookoutmetricsAlert resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LookoutmetricsAlert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LookoutmetricsAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_alert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LookoutmetricsAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference">LookoutmetricsAlertActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.actionInput">actionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertDescriptionInput">alertDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertNameInput">alertNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertSensitivityThresholdInput">alertSensitivityThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.anomalyDetectorArnInput">anomalyDetectorArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertDescription">alertDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertName">alertName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertSensitivityThreshold">alertSensitivityThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.anomalyDetectorArn">anomalyDetectorArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.action"></a>

```typescript
public readonly action: LookoutmetricsAlertActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference">LookoutmetricsAlertActionOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.actionInput"></a>

```typescript
public readonly actionInput: IResolvable | LookoutmetricsAlertAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a>

---

##### `alertDescriptionInput`<sup>Optional</sup> <a name="alertDescriptionInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertDescriptionInput"></a>

```typescript
public readonly alertDescriptionInput: string;
```

- *Type:* string

---

##### `alertNameInput`<sup>Optional</sup> <a name="alertNameInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertNameInput"></a>

```typescript
public readonly alertNameInput: string;
```

- *Type:* string

---

##### `alertSensitivityThresholdInput`<sup>Optional</sup> <a name="alertSensitivityThresholdInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertSensitivityThresholdInput"></a>

```typescript
public readonly alertSensitivityThresholdInput: number;
```

- *Type:* number

---

##### `anomalyDetectorArnInput`<sup>Optional</sup> <a name="anomalyDetectorArnInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.anomalyDetectorArnInput"></a>

```typescript
public readonly anomalyDetectorArnInput: string;
```

- *Type:* string

---

##### `alertDescription`<sup>Required</sup> <a name="alertDescription" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertDescription"></a>

```typescript
public readonly alertDescription: string;
```

- *Type:* string

---

##### `alertName`<sup>Required</sup> <a name="alertName" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertName"></a>

```typescript
public readonly alertName: string;
```

- *Type:* string

---

##### `alertSensitivityThreshold`<sup>Required</sup> <a name="alertSensitivityThreshold" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertSensitivityThreshold"></a>

```typescript
public readonly alertSensitivityThreshold: number;
```

- *Type:* number

---

##### `anomalyDetectorArn`<sup>Required</sup> <a name="anomalyDetectorArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.anomalyDetectorArn"></a>

```typescript
public readonly anomalyDetectorArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LookoutmetricsAlertAction <a name="LookoutmetricsAlertAction" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction.Initializer"></a>

```typescript
import { lookoutmetricsAlert } from '@cdktn/provider-awscc'

const lookoutmetricsAlertAction: lookoutmetricsAlert.LookoutmetricsAlertAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction.property.lambdaConfiguration">lambdaConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a></code> | Configuration options for a Lambda alert action. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction.property.snsConfiguration">snsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a></code> | Configuration options for an SNS alert action. |

---

##### `lambdaConfiguration`<sup>Optional</sup> <a name="lambdaConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction.property.lambdaConfiguration"></a>

```typescript
public readonly lambdaConfiguration: LookoutmetricsAlertActionLambdaConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a>

Configuration options for a Lambda alert action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_alert#lambda_configuration LookoutmetricsAlert#lambda_configuration}

---

##### `snsConfiguration`<sup>Optional</sup> <a name="snsConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction.property.snsConfiguration"></a>

```typescript
public readonly snsConfiguration: LookoutmetricsAlertActionSnsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a>

Configuration options for an SNS alert action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_alert#sns_configuration LookoutmetricsAlert#sns_configuration}

---

### LookoutmetricsAlertActionLambdaConfiguration <a name="LookoutmetricsAlertActionLambdaConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration.Initializer"></a>

```typescript
import { lookoutmetricsAlert } from '@cdktn/provider-awscc'

const lookoutmetricsAlertActionLambdaConfiguration: lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | ARN of a Lambda to send alert notifications to. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration.property.roleArn">roleArn</a></code> | <code>string</code> | ARN of an IAM role that LookoutMetrics should assume to access the Lambda function. |

---

##### `lambdaArn`<sup>Optional</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

ARN of a Lambda to send alert notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_alert#lambda_arn LookoutmetricsAlert#lambda_arn}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

ARN of an IAM role that LookoutMetrics should assume to access the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_alert#role_arn LookoutmetricsAlert#role_arn}

---

### LookoutmetricsAlertActionSnsConfiguration <a name="LookoutmetricsAlertActionSnsConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration.Initializer"></a>

```typescript
import { lookoutmetricsAlert } from '@cdktn/provider-awscc'

const lookoutmetricsAlertActionSnsConfiguration: lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration.property.roleArn">roleArn</a></code> | <code>string</code> | ARN of an IAM role that LookoutMetrics should assume to access the SNS topic. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | ARN of an SNS topic to send alert notifications to. |

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

ARN of an IAM role that LookoutMetrics should assume to access the SNS topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_alert#role_arn LookoutmetricsAlert#role_arn}

---

##### `snsTopicArn`<sup>Optional</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

ARN of an SNS topic to send alert notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_alert#sns_topic_arn LookoutmetricsAlert#sns_topic_arn}

---

### LookoutmetricsAlertConfig <a name="LookoutmetricsAlertConfig" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.Initializer"></a>

```typescript
import { lookoutmetricsAlert } from '@cdktn/provider-awscc'

const lookoutmetricsAlertConfig: lookoutmetricsAlert.LookoutmetricsAlertConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a></code> | The action to be taken by the alert when an anomaly is detected. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.alertSensitivityThreshold">alertSensitivityThreshold</a></code> | <code>number</code> | A number between 0 and 100 (inclusive) that tunes the sensitivity of the alert. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.anomalyDetectorArn">anomalyDetectorArn</a></code> | <code>string</code> | The Amazon resource name (ARN) of the Anomaly Detector to alert. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.alertDescription">alertDescription</a></code> | <code>string</code> | A description for the alert. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.alertName">alertName</a></code> | <code>string</code> | The name of the alert. If not provided, a name is generated automatically. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.action"></a>

```typescript
public readonly action: LookoutmetricsAlertAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a>

The action to be taken by the alert when an anomaly is detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_alert#action LookoutmetricsAlert#action}

---

##### `alertSensitivityThreshold`<sup>Required</sup> <a name="alertSensitivityThreshold" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.alertSensitivityThreshold"></a>

```typescript
public readonly alertSensitivityThreshold: number;
```

- *Type:* number

A number between 0 and 100 (inclusive) that tunes the sensitivity of the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_alert#alert_sensitivity_threshold LookoutmetricsAlert#alert_sensitivity_threshold}

---

##### `anomalyDetectorArn`<sup>Required</sup> <a name="anomalyDetectorArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.anomalyDetectorArn"></a>

```typescript
public readonly anomalyDetectorArn: string;
```

- *Type:* string

The Amazon resource name (ARN) of the Anomaly Detector to alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_alert#anomaly_detector_arn LookoutmetricsAlert#anomaly_detector_arn}

---

##### `alertDescription`<sup>Optional</sup> <a name="alertDescription" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.alertDescription"></a>

```typescript
public readonly alertDescription: string;
```

- *Type:* string

A description for the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_alert#alert_description LookoutmetricsAlert#alert_description}

---

##### `alertName`<sup>Optional</sup> <a name="alertName" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.alertName"></a>

```typescript
public readonly alertName: string;
```

- *Type:* string

The name of the alert. If not provided, a name is generated automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lookoutmetrics_alert#alert_name LookoutmetricsAlert#alert_name}

---

## Classes <a name="Classes" id="Classes"></a>

### LookoutmetricsAlertActionLambdaConfigurationOutputReference <a name="LookoutmetricsAlertActionLambdaConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer"></a>

```typescript
import { lookoutmetricsAlert } from '@cdktn/provider-awscc'

new lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resetLambdaArn">resetLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdaArn` <a name="resetLambdaArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resetLambdaArn"></a>

```typescript
public resetLambdaArn(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.lambdaArnInput"></a>

```typescript
public readonly lambdaArnInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutmetricsAlertActionLambdaConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a>

---


### LookoutmetricsAlertActionOutputReference <a name="LookoutmetricsAlertActionOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.Initializer"></a>

```typescript
import { lookoutmetricsAlert } from '@cdktn/provider-awscc'

new lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putLambdaConfiguration">putLambdaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putSnsConfiguration">putSnsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resetLambdaConfiguration">resetLambdaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resetSnsConfiguration">resetSnsConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambdaConfiguration` <a name="putLambdaConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putLambdaConfiguration"></a>

```typescript
public putLambdaConfiguration(value: LookoutmetricsAlertActionLambdaConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putLambdaConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a>

---

##### `putSnsConfiguration` <a name="putSnsConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putSnsConfiguration"></a>

```typescript
public putSnsConfiguration(value: LookoutmetricsAlertActionSnsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putSnsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a>

---

##### `resetLambdaConfiguration` <a name="resetLambdaConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resetLambdaConfiguration"></a>

```typescript
public resetLambdaConfiguration(): void
```

##### `resetSnsConfiguration` <a name="resetSnsConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resetSnsConfiguration"></a>

```typescript
public resetSnsConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.lambdaConfiguration">lambdaConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference">LookoutmetricsAlertActionLambdaConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.snsConfiguration">snsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference">LookoutmetricsAlertActionSnsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.lambdaConfigurationInput">lambdaConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.snsConfigurationInput">snsConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaConfiguration`<sup>Required</sup> <a name="lambdaConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.lambdaConfiguration"></a>

```typescript
public readonly lambdaConfiguration: LookoutmetricsAlertActionLambdaConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference">LookoutmetricsAlertActionLambdaConfigurationOutputReference</a>

---

##### `snsConfiguration`<sup>Required</sup> <a name="snsConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.snsConfiguration"></a>

```typescript
public readonly snsConfiguration: LookoutmetricsAlertActionSnsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference">LookoutmetricsAlertActionSnsConfigurationOutputReference</a>

---

##### `lambdaConfigurationInput`<sup>Optional</sup> <a name="lambdaConfigurationInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.lambdaConfigurationInput"></a>

```typescript
public readonly lambdaConfigurationInput: IResolvable | LookoutmetricsAlertActionLambdaConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a>

---

##### `snsConfigurationInput`<sup>Optional</sup> <a name="snsConfigurationInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.snsConfigurationInput"></a>

```typescript
public readonly snsConfigurationInput: IResolvable | LookoutmetricsAlertActionSnsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutmetricsAlertAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a>

---


### LookoutmetricsAlertActionSnsConfigurationOutputReference <a name="LookoutmetricsAlertActionSnsConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer"></a>

```typescript
import { lookoutmetricsAlert } from '@cdktn/provider-awscc'

new lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resetSnsTopicArn">resetSnsTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetSnsTopicArn` <a name="resetSnsTopicArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resetSnsTopicArn"></a>

```typescript
public resetSnsTopicArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.snsTopicArnInput"></a>

```typescript
public readonly snsTopicArnInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutmetricsAlertActionSnsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a>

---



