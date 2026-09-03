# `nimblestudioStudioComponent` Submodule <a name="`nimblestudioStudioComponent` Submodule" id="@cdktn/provider-awscc.nimblestudioStudioComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NimblestudioStudioComponent <a name="NimblestudioStudioComponent" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component awscc_nimblestudio_studio_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

new nimblestudioStudioComponent.NimblestudioStudioComponent(scope: Construct, id: string, config: NimblestudioStudioComponentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig">NimblestudioStudioComponentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig">NimblestudioStudioComponentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putInitializationScripts">putInitializationScripts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putScriptParameters">putScriptParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetEc2SecurityGroupIds">resetEc2SecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetInitializationScripts">resetInitializationScripts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetScriptParameters">resetScriptParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetSubtype">resetSubtype</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putConfiguration"></a>

```typescript
public putConfiguration(value: NimblestudioStudioComponentConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a>

---

##### `putInitializationScripts` <a name="putInitializationScripts" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putInitializationScripts"></a>

```typescript
public putInitializationScripts(value: IResolvable | NimblestudioStudioComponentInitializationScripts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putInitializationScripts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>[]

---

##### `putScriptParameters` <a name="putScriptParameters" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putScriptParameters"></a>

```typescript
public putScriptParameters(value: IResolvable | NimblestudioStudioComponentScriptParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putScriptParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>[]

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEc2SecurityGroupIds` <a name="resetEc2SecurityGroupIds" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetEc2SecurityGroupIds"></a>

```typescript
public resetEc2SecurityGroupIds(): void
```

##### `resetInitializationScripts` <a name="resetInitializationScripts" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetInitializationScripts"></a>

```typescript
public resetInitializationScripts(): void
```

##### `resetScriptParameters` <a name="resetScriptParameters" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetScriptParameters"></a>

```typescript
public resetScriptParameters(): void
```

##### `resetSubtype` <a name="resetSubtype" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetSubtype"></a>

```typescript
public resetSubtype(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NimblestudioStudioComponent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isConstruct"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

nimblestudioStudioComponent.NimblestudioStudioComponent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformElement"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformResource"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NimblestudioStudioComponent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NimblestudioStudioComponent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NimblestudioStudioComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NimblestudioStudioComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference">NimblestudioStudioComponentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.initializationScripts">initializationScripts</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList">NimblestudioStudioComponentInitializationScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.scriptParameters">scriptParameters</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList">NimblestudioStudioComponentScriptParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.studioComponentId">studioComponentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.configurationInput">configurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.ec2SecurityGroupIdsInput">ec2SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.initializationScriptsInput">initializationScriptsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.scriptParametersInput">scriptParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.studioIdInput">studioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.subtypeInput">subtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.ec2SecurityGroupIds">ec2SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.studioId">studioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.subtype">subtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.configuration"></a>

```typescript
public readonly configuration: NimblestudioStudioComponentConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference">NimblestudioStudioComponentConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initializationScripts`<sup>Required</sup> <a name="initializationScripts" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.initializationScripts"></a>

```typescript
public readonly initializationScripts: NimblestudioStudioComponentInitializationScriptsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList">NimblestudioStudioComponentInitializationScriptsList</a>

---

##### `scriptParameters`<sup>Required</sup> <a name="scriptParameters" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.scriptParameters"></a>

```typescript
public readonly scriptParameters: NimblestudioStudioComponentScriptParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList">NimblestudioStudioComponentScriptParametersList</a>

---

##### `studioComponentId`<sup>Required</sup> <a name="studioComponentId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.studioComponentId"></a>

```typescript
public readonly studioComponentId: string;
```

- *Type:* string

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.configurationInput"></a>

```typescript
public readonly configurationInput: IResolvable | NimblestudioStudioComponentConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `ec2SecurityGroupIdsInput`<sup>Optional</sup> <a name="ec2SecurityGroupIdsInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.ec2SecurityGroupIdsInput"></a>

```typescript
public readonly ec2SecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `initializationScriptsInput`<sup>Optional</sup> <a name="initializationScriptsInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.initializationScriptsInput"></a>

```typescript
public readonly initializationScriptsInput: IResolvable | NimblestudioStudioComponentInitializationScripts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scriptParametersInput`<sup>Optional</sup> <a name="scriptParametersInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.scriptParametersInput"></a>

```typescript
public readonly scriptParametersInput: IResolvable | NimblestudioStudioComponentScriptParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>[]

---

##### `studioIdInput`<sup>Optional</sup> <a name="studioIdInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.studioIdInput"></a>

```typescript
public readonly studioIdInput: string;
```

- *Type:* string

---

##### `subtypeInput`<sup>Optional</sup> <a name="subtypeInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.subtypeInput"></a>

```typescript
public readonly subtypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ec2SecurityGroupIds`<sup>Required</sup> <a name="ec2SecurityGroupIds" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.ec2SecurityGroupIds"></a>

```typescript
public readonly ec2SecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.studioId"></a>

```typescript
public readonly studioId: string;
```

- *Type:* string

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.subtype"></a>

```typescript
public readonly subtype: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NimblestudioStudioComponentConfig <a name="NimblestudioStudioComponentConfig" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.Initializer"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

const nimblestudioStudioComponentConfig: nimblestudioStudioComponent.NimblestudioStudioComponentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#name NimblestudioStudioComponent#name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.studioId">studioId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#studio_id NimblestudioStudioComponent#studio_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#type NimblestudioStudioComponent#type}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#configuration NimblestudioStudioComponent#configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#description NimblestudioStudioComponent#description}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.ec2SecurityGroupIds">ec2SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#ec_2_security_group_ids NimblestudioStudioComponent#ec_2_security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.initializationScripts">initializationScripts</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#initialization_scripts NimblestudioStudioComponent#initialization_scripts}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.scriptParameters">scriptParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#script_parameters NimblestudioStudioComponent#script_parameters}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.subtype">subtype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#subtype NimblestudioStudioComponent#subtype}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#tags NimblestudioStudioComponent#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#name NimblestudioStudioComponent#name}.

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.studioId"></a>

```typescript
public readonly studioId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#studio_id NimblestudioStudioComponent#studio_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#type NimblestudioStudioComponent#type}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.configuration"></a>

```typescript
public readonly configuration: NimblestudioStudioComponentConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#configuration NimblestudioStudioComponent#configuration}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#description NimblestudioStudioComponent#description}.

---

##### `ec2SecurityGroupIds`<sup>Optional</sup> <a name="ec2SecurityGroupIds" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.ec2SecurityGroupIds"></a>

```typescript
public readonly ec2SecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#ec_2_security_group_ids NimblestudioStudioComponent#ec_2_security_group_ids}.

---

##### `initializationScripts`<sup>Optional</sup> <a name="initializationScripts" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.initializationScripts"></a>

```typescript
public readonly initializationScripts: IResolvable | NimblestudioStudioComponentInitializationScripts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#initialization_scripts NimblestudioStudioComponent#initialization_scripts}.

---

##### `scriptParameters`<sup>Optional</sup> <a name="scriptParameters" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.scriptParameters"></a>

```typescript
public readonly scriptParameters: IResolvable | NimblestudioStudioComponentScriptParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#script_parameters NimblestudioStudioComponent#script_parameters}.

---

##### `subtype`<sup>Optional</sup> <a name="subtype" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.subtype"></a>

```typescript
public readonly subtype: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#subtype NimblestudioStudioComponent#subtype}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#tags NimblestudioStudioComponent#tags}.

---

### NimblestudioStudioComponentConfiguration <a name="NimblestudioStudioComponentConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.Initializer"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

const nimblestudioStudioComponentConfiguration: nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.activeDirectoryConfiguration">activeDirectoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#active_directory_configuration NimblestudioStudioComponent#active_directory_configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.computeFarmConfiguration">computeFarmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#compute_farm_configuration NimblestudioStudioComponent#compute_farm_configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.licenseServiceConfiguration">licenseServiceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#license_service_configuration NimblestudioStudioComponent#license_service_configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.sharedFileSystemConfiguration">sharedFileSystemConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#shared_file_system_configuration NimblestudioStudioComponent#shared_file_system_configuration}. |

---

##### `activeDirectoryConfiguration`<sup>Optional</sup> <a name="activeDirectoryConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.activeDirectoryConfiguration"></a>

```typescript
public readonly activeDirectoryConfiguration: NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#active_directory_configuration NimblestudioStudioComponent#active_directory_configuration}.

---

##### `computeFarmConfiguration`<sup>Optional</sup> <a name="computeFarmConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.computeFarmConfiguration"></a>

```typescript
public readonly computeFarmConfiguration: NimblestudioStudioComponentConfigurationComputeFarmConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#compute_farm_configuration NimblestudioStudioComponent#compute_farm_configuration}.

---

##### `licenseServiceConfiguration`<sup>Optional</sup> <a name="licenseServiceConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.licenseServiceConfiguration"></a>

```typescript
public readonly licenseServiceConfiguration: NimblestudioStudioComponentConfigurationLicenseServiceConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#license_service_configuration NimblestudioStudioComponent#license_service_configuration}.

---

##### `sharedFileSystemConfiguration`<sup>Optional</sup> <a name="sharedFileSystemConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.sharedFileSystemConfiguration"></a>

```typescript
public readonly sharedFileSystemConfiguration: NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#shared_file_system_configuration NimblestudioStudioComponent#shared_file_system_configuration}.

---

### NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration <a name="NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.Initializer"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

const nimblestudioStudioComponentConfigurationActiveDirectoryConfiguration: nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.property.computerAttributes">computerAttributes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#computer_attributes NimblestudioStudioComponent#computer_attributes}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.property.directoryId">directoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#directory_id NimblestudioStudioComponent#directory_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.property.organizationalUnitDistinguishedName">organizationalUnitDistinguishedName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#organizational_unit_distinguished_name NimblestudioStudioComponent#organizational_unit_distinguished_name}. |

---

##### `computerAttributes`<sup>Optional</sup> <a name="computerAttributes" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.property.computerAttributes"></a>

```typescript
public readonly computerAttributes: IResolvable | NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#computer_attributes NimblestudioStudioComponent#computer_attributes}.

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#directory_id NimblestudioStudioComponent#directory_id}.

---

##### `organizationalUnitDistinguishedName`<sup>Optional</sup> <a name="organizationalUnitDistinguishedName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.property.organizationalUnitDistinguishedName"></a>

```typescript
public readonly organizationalUnitDistinguishedName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#organizational_unit_distinguished_name NimblestudioStudioComponent#organizational_unit_distinguished_name}.

---

### NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes <a name="NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes.Initializer"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

const nimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes: nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#name NimblestudioStudioComponent#name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#value NimblestudioStudioComponent#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#name NimblestudioStudioComponent#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#value NimblestudioStudioComponent#value}.

---

### NimblestudioStudioComponentConfigurationComputeFarmConfiguration <a name="NimblestudioStudioComponentConfigurationComputeFarmConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration.Initializer"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

const nimblestudioStudioComponentConfigurationComputeFarmConfiguration: nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration.property.activeDirectoryUser">activeDirectoryUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#active_directory_user NimblestudioStudioComponent#active_directory_user}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration.property.endpoint">endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}. |

---

##### `activeDirectoryUser`<sup>Optional</sup> <a name="activeDirectoryUser" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration.property.activeDirectoryUser"></a>

```typescript
public readonly activeDirectoryUser: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#active_directory_user NimblestudioStudioComponent#active_directory_user}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}.

---

### NimblestudioStudioComponentConfigurationLicenseServiceConfiguration <a name="NimblestudioStudioComponentConfigurationLicenseServiceConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration.Initializer"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

const nimblestudioStudioComponentConfigurationLicenseServiceConfiguration: nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration.property.endpoint">endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}. |

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}.

---

### NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration <a name="NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.Initializer"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

const nimblestudioStudioComponentConfigurationSharedFileSystemConfiguration: nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.endpoint">endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#file_system_id NimblestudioStudioComponent#file_system_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.linuxMountPoint">linuxMountPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#linux_mount_point NimblestudioStudioComponent#linux_mount_point}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.shareName">shareName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#share_name NimblestudioStudioComponent#share_name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.windowsMountDrive">windowsMountDrive</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#windows_mount_drive NimblestudioStudioComponent#windows_mount_drive}. |

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}.

---

##### `fileSystemId`<sup>Optional</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#file_system_id NimblestudioStudioComponent#file_system_id}.

---

##### `linuxMountPoint`<sup>Optional</sup> <a name="linuxMountPoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.linuxMountPoint"></a>

```typescript
public readonly linuxMountPoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#linux_mount_point NimblestudioStudioComponent#linux_mount_point}.

---

##### `shareName`<sup>Optional</sup> <a name="shareName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#share_name NimblestudioStudioComponent#share_name}.

---

##### `windowsMountDrive`<sup>Optional</sup> <a name="windowsMountDrive" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.windowsMountDrive"></a>

```typescript
public readonly windowsMountDrive: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#windows_mount_drive NimblestudioStudioComponent#windows_mount_drive}.

---

### NimblestudioStudioComponentInitializationScripts <a name="NimblestudioStudioComponentInitializationScripts" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.Initializer"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

const nimblestudioStudioComponentInitializationScripts: nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.launchProfileProtocolVersion">launchProfileProtocolVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#launch_profile_protocol_version NimblestudioStudioComponent#launch_profile_protocol_version}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.platform">platform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#platform NimblestudioStudioComponent#platform}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.runContext">runContext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#run_context NimblestudioStudioComponent#run_context}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.script">script</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#script NimblestudioStudioComponent#script}. |

---

##### `launchProfileProtocolVersion`<sup>Optional</sup> <a name="launchProfileProtocolVersion" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.launchProfileProtocolVersion"></a>

```typescript
public readonly launchProfileProtocolVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#launch_profile_protocol_version NimblestudioStudioComponent#launch_profile_protocol_version}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#platform NimblestudioStudioComponent#platform}.

---

##### `runContext`<sup>Optional</sup> <a name="runContext" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.runContext"></a>

```typescript
public readonly runContext: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#run_context NimblestudioStudioComponent#run_context}.

---

##### `script`<sup>Optional</sup> <a name="script" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#script NimblestudioStudioComponent#script}.

---

### NimblestudioStudioComponentScriptParameters <a name="NimblestudioStudioComponentScriptParameters" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters.Initializer"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

const nimblestudioStudioComponentScriptParameters: nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#key NimblestudioStudioComponent#key}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#value NimblestudioStudioComponent#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#key NimblestudioStudioComponent#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio_component#value NimblestudioStudioComponent#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList <a name="NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

new nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.get"></a>

```typescript
public get(index: number): NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>[]

---


### NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference <a name="NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

new nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>

---


### NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference <a name="NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

new nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.putComputerAttributes">putComputerAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resetComputerAttributes">resetComputerAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resetDirectoryId">resetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resetOrganizationalUnitDistinguishedName">resetOrganizationalUnitDistinguishedName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putComputerAttributes` <a name="putComputerAttributes" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.putComputerAttributes"></a>

```typescript
public putComputerAttributes(value: IResolvable | NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.putComputerAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>[]

---

##### `resetComputerAttributes` <a name="resetComputerAttributes" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resetComputerAttributes"></a>

```typescript
public resetComputerAttributes(): void
```

##### `resetDirectoryId` <a name="resetDirectoryId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resetDirectoryId"></a>

```typescript
public resetDirectoryId(): void
```

##### `resetOrganizationalUnitDistinguishedName` <a name="resetOrganizationalUnitDistinguishedName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resetOrganizationalUnitDistinguishedName"></a>

```typescript
public resetOrganizationalUnitDistinguishedName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.computerAttributes">computerAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.computerAttributesInput">computerAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.directoryIdInput">directoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedNameInput">organizationalUnitDistinguishedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName">organizationalUnitDistinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computerAttributes`<sup>Required</sup> <a name="computerAttributes" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.computerAttributes"></a>

```typescript
public readonly computerAttributes: NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList</a>

---

##### `computerAttributesInput`<sup>Optional</sup> <a name="computerAttributesInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.computerAttributesInput"></a>

```typescript
public readonly computerAttributesInput: IResolvable | NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>[]

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.directoryIdInput"></a>

```typescript
public readonly directoryIdInput: string;
```

- *Type:* string

---

##### `organizationalUnitDistinguishedNameInput`<sup>Optional</sup> <a name="organizationalUnitDistinguishedNameInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedNameInput"></a>

```typescript
public readonly organizationalUnitDistinguishedNameInput: string;
```

- *Type:* string

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `organizationalUnitDistinguishedName`<sup>Required</sup> <a name="organizationalUnitDistinguishedName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName"></a>

```typescript
public readonly organizationalUnitDistinguishedName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a>

---


### NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference <a name="NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

new nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resetActiveDirectoryUser">resetActiveDirectoryUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActiveDirectoryUser` <a name="resetActiveDirectoryUser" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resetActiveDirectoryUser"></a>

```typescript
public resetActiveDirectoryUser(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.activeDirectoryUserInput">activeDirectoryUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.activeDirectoryUser">activeDirectoryUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeDirectoryUserInput`<sup>Optional</sup> <a name="activeDirectoryUserInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.activeDirectoryUserInput"></a>

```typescript
public readonly activeDirectoryUserInput: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `activeDirectoryUser`<sup>Required</sup> <a name="activeDirectoryUser" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.activeDirectoryUser"></a>

```typescript
public readonly activeDirectoryUser: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NimblestudioStudioComponentConfigurationComputeFarmConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a>

---


### NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference <a name="NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

new nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NimblestudioStudioComponentConfigurationLicenseServiceConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a>

---


### NimblestudioStudioComponentConfigurationOutputReference <a name="NimblestudioStudioComponentConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.Initializer"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

new nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putActiveDirectoryConfiguration">putActiveDirectoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putComputeFarmConfiguration">putComputeFarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putLicenseServiceConfiguration">putLicenseServiceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putSharedFileSystemConfiguration">putSharedFileSystemConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetActiveDirectoryConfiguration">resetActiveDirectoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetComputeFarmConfiguration">resetComputeFarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetLicenseServiceConfiguration">resetLicenseServiceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetSharedFileSystemConfiguration">resetSharedFileSystemConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActiveDirectoryConfiguration` <a name="putActiveDirectoryConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putActiveDirectoryConfiguration"></a>

```typescript
public putActiveDirectoryConfiguration(value: NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putActiveDirectoryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a>

---

##### `putComputeFarmConfiguration` <a name="putComputeFarmConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putComputeFarmConfiguration"></a>

```typescript
public putComputeFarmConfiguration(value: NimblestudioStudioComponentConfigurationComputeFarmConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putComputeFarmConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a>

---

##### `putLicenseServiceConfiguration` <a name="putLicenseServiceConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putLicenseServiceConfiguration"></a>

```typescript
public putLicenseServiceConfiguration(value: NimblestudioStudioComponentConfigurationLicenseServiceConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putLicenseServiceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a>

---

##### `putSharedFileSystemConfiguration` <a name="putSharedFileSystemConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putSharedFileSystemConfiguration"></a>

```typescript
public putSharedFileSystemConfiguration(value: NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putSharedFileSystemConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a>

---

##### `resetActiveDirectoryConfiguration` <a name="resetActiveDirectoryConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetActiveDirectoryConfiguration"></a>

```typescript
public resetActiveDirectoryConfiguration(): void
```

##### `resetComputeFarmConfiguration` <a name="resetComputeFarmConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetComputeFarmConfiguration"></a>

```typescript
public resetComputeFarmConfiguration(): void
```

##### `resetLicenseServiceConfiguration` <a name="resetLicenseServiceConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetLicenseServiceConfiguration"></a>

```typescript
public resetLicenseServiceConfiguration(): void
```

##### `resetSharedFileSystemConfiguration` <a name="resetSharedFileSystemConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetSharedFileSystemConfiguration"></a>

```typescript
public resetSharedFileSystemConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.activeDirectoryConfiguration">activeDirectoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.computeFarmConfiguration">computeFarmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference">NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.licenseServiceConfiguration">licenseServiceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference">NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.sharedFileSystemConfiguration">sharedFileSystemConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference">NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.activeDirectoryConfigurationInput">activeDirectoryConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.computeFarmConfigurationInput">computeFarmConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.licenseServiceConfigurationInput">licenseServiceConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.sharedFileSystemConfigurationInput">sharedFileSystemConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeDirectoryConfiguration`<sup>Required</sup> <a name="activeDirectoryConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.activeDirectoryConfiguration"></a>

```typescript
public readonly activeDirectoryConfiguration: NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference</a>

---

##### `computeFarmConfiguration`<sup>Required</sup> <a name="computeFarmConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.computeFarmConfiguration"></a>

```typescript
public readonly computeFarmConfiguration: NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference">NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference</a>

---

##### `licenseServiceConfiguration`<sup>Required</sup> <a name="licenseServiceConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.licenseServiceConfiguration"></a>

```typescript
public readonly licenseServiceConfiguration: NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference">NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference</a>

---

##### `sharedFileSystemConfiguration`<sup>Required</sup> <a name="sharedFileSystemConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.sharedFileSystemConfiguration"></a>

```typescript
public readonly sharedFileSystemConfiguration: NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference">NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference</a>

---

##### `activeDirectoryConfigurationInput`<sup>Optional</sup> <a name="activeDirectoryConfigurationInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.activeDirectoryConfigurationInput"></a>

```typescript
public readonly activeDirectoryConfigurationInput: IResolvable | NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a>

---

##### `computeFarmConfigurationInput`<sup>Optional</sup> <a name="computeFarmConfigurationInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.computeFarmConfigurationInput"></a>

```typescript
public readonly computeFarmConfigurationInput: IResolvable | NimblestudioStudioComponentConfigurationComputeFarmConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a>

---

##### `licenseServiceConfigurationInput`<sup>Optional</sup> <a name="licenseServiceConfigurationInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.licenseServiceConfigurationInput"></a>

```typescript
public readonly licenseServiceConfigurationInput: IResolvable | NimblestudioStudioComponentConfigurationLicenseServiceConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a>

---

##### `sharedFileSystemConfigurationInput`<sup>Optional</sup> <a name="sharedFileSystemConfigurationInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.sharedFileSystemConfigurationInput"></a>

```typescript
public readonly sharedFileSystemConfigurationInput: IResolvable | NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NimblestudioStudioComponentConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a>

---


### NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference <a name="NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

new nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetFileSystemId">resetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetLinuxMountPoint">resetLinuxMountPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetShareName">resetShareName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetWindowsMountDrive">resetWindowsMountDrive</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetFileSystemId` <a name="resetFileSystemId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetFileSystemId"></a>

```typescript
public resetFileSystemId(): void
```

##### `resetLinuxMountPoint` <a name="resetLinuxMountPoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetLinuxMountPoint"></a>

```typescript
public resetLinuxMountPoint(): void
```

##### `resetShareName` <a name="resetShareName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetShareName"></a>

```typescript
public resetShareName(): void
```

##### `resetWindowsMountDrive` <a name="resetWindowsMountDrive" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetWindowsMountDrive"></a>

```typescript
public resetWindowsMountDrive(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.linuxMountPointInput">linuxMountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.shareNameInput">shareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.windowsMountDriveInput">windowsMountDriveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.linuxMountPoint">linuxMountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.shareName">shareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.windowsMountDrive">windowsMountDrive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fileSystemIdInput"></a>

```typescript
public readonly fileSystemIdInput: string;
```

- *Type:* string

---

##### `linuxMountPointInput`<sup>Optional</sup> <a name="linuxMountPointInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.linuxMountPointInput"></a>

```typescript
public readonly linuxMountPointInput: string;
```

- *Type:* string

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.shareNameInput"></a>

```typescript
public readonly shareNameInput: string;
```

- *Type:* string

---

##### `windowsMountDriveInput`<sup>Optional</sup> <a name="windowsMountDriveInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.windowsMountDriveInput"></a>

```typescript
public readonly windowsMountDriveInput: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `linuxMountPoint`<sup>Required</sup> <a name="linuxMountPoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.linuxMountPoint"></a>

```typescript
public readonly linuxMountPoint: string;
```

- *Type:* string

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

---

##### `windowsMountDrive`<sup>Required</sup> <a name="windowsMountDrive" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.windowsMountDrive"></a>

```typescript
public readonly windowsMountDrive: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a>

---


### NimblestudioStudioComponentInitializationScriptsList <a name="NimblestudioStudioComponentInitializationScriptsList" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

new nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.get"></a>

```typescript
public get(index: number): NimblestudioStudioComponentInitializationScriptsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NimblestudioStudioComponentInitializationScripts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>[]

---


### NimblestudioStudioComponentInitializationScriptsOutputReference <a name="NimblestudioStudioComponentInitializationScriptsOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

new nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetLaunchProfileProtocolVersion">resetLaunchProfileProtocolVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetPlatform">resetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetRunContext">resetRunContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetScript">resetScript</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLaunchProfileProtocolVersion` <a name="resetLaunchProfileProtocolVersion" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetLaunchProfileProtocolVersion"></a>

```typescript
public resetLaunchProfileProtocolVersion(): void
```

##### `resetPlatform` <a name="resetPlatform" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetPlatform"></a>

```typescript
public resetPlatform(): void
```

##### `resetRunContext` <a name="resetRunContext" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetRunContext"></a>

```typescript
public resetRunContext(): void
```

##### `resetScript` <a name="resetScript" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetScript"></a>

```typescript
public resetScript(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.launchProfileProtocolVersionInput">launchProfileProtocolVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.platformInput">platformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.runContextInput">runContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.scriptInput">scriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.launchProfileProtocolVersion">launchProfileProtocolVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.runContext">runContext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.script">script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchProfileProtocolVersionInput`<sup>Optional</sup> <a name="launchProfileProtocolVersionInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.launchProfileProtocolVersionInput"></a>

```typescript
public readonly launchProfileProtocolVersionInput: string;
```

- *Type:* string

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.platformInput"></a>

```typescript
public readonly platformInput: string;
```

- *Type:* string

---

##### `runContextInput`<sup>Optional</sup> <a name="runContextInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.runContextInput"></a>

```typescript
public readonly runContextInput: string;
```

- *Type:* string

---

##### `scriptInput`<sup>Optional</sup> <a name="scriptInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.scriptInput"></a>

```typescript
public readonly scriptInput: string;
```

- *Type:* string

---

##### `launchProfileProtocolVersion`<sup>Required</sup> <a name="launchProfileProtocolVersion" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.launchProfileProtocolVersion"></a>

```typescript
public readonly launchProfileProtocolVersion: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `runContext`<sup>Required</sup> <a name="runContext" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.runContext"></a>

```typescript
public readonly runContext: string;
```

- *Type:* string

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NimblestudioStudioComponentInitializationScripts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>

---


### NimblestudioStudioComponentScriptParametersList <a name="NimblestudioStudioComponentScriptParametersList" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

new nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.get"></a>

```typescript
public get(index: number): NimblestudioStudioComponentScriptParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NimblestudioStudioComponentScriptParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>[]

---


### NimblestudioStudioComponentScriptParametersOutputReference <a name="NimblestudioStudioComponentScriptParametersOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer"></a>

```typescript
import { nimblestudioStudioComponent } from '@cdktn/provider-awscc'

new nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NimblestudioStudioComponentScriptParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>

---



