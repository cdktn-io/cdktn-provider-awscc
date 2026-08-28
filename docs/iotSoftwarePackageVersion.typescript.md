# `iotSoftwarePackageVersion` Submodule <a name="`iotSoftwarePackageVersion` Submodule" id="@cdktn/provider-awscc.iotSoftwarePackageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotSoftwarePackageVersion <a name="IotSoftwarePackageVersion" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_software_package_version awscc_iot_software_package_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer"></a>

```typescript
import { iotSoftwarePackageVersion } from '@cdktn/provider-awscc'

new iotSoftwarePackageVersion.IotSoftwarePackageVersion(scope: Construct, id: string, config: IotSoftwarePackageVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig">IotSoftwarePackageVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig">IotSoftwarePackageVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putArtifact">putArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putSbom">putSbom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetArtifact">resetArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetRecipe">resetRecipe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetSbom">resetSbom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetVersionName">resetVersionName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArtifact` <a name="putArtifact" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putArtifact"></a>

```typescript
public putArtifact(value: IotSoftwarePackageVersionArtifact): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putArtifact.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact">IotSoftwarePackageVersionArtifact</a>

---

##### `putSbom` <a name="putSbom" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putSbom"></a>

```typescript
public putSbom(value: IotSoftwarePackageVersionSbom): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putSbom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom">IotSoftwarePackageVersionSbom</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putTags"></a>

```typescript
public putTags(value: IResolvable | IotSoftwarePackageVersionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>[]

---

##### `resetArtifact` <a name="resetArtifact" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetArtifact"></a>

```typescript
public resetArtifact(): void
```

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetRecipe` <a name="resetRecipe" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetRecipe"></a>

```typescript
public resetRecipe(): void
```

##### `resetSbom` <a name="resetSbom" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetSbom"></a>

```typescript
public resetSbom(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVersionName` <a name="resetVersionName" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetVersionName"></a>

```typescript
public resetVersionName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotSoftwarePackageVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isConstruct"></a>

```typescript
import { iotSoftwarePackageVersion } from '@cdktn/provider-awscc'

iotSoftwarePackageVersion.IotSoftwarePackageVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isTerraformElement"></a>

```typescript
import { iotSoftwarePackageVersion } from '@cdktn/provider-awscc'

iotSoftwarePackageVersion.IotSoftwarePackageVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isTerraformResource"></a>

```typescript
import { iotSoftwarePackageVersion } from '@cdktn/provider-awscc'

iotSoftwarePackageVersion.IotSoftwarePackageVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.generateConfigForImport"></a>

```typescript
import { iotSoftwarePackageVersion } from '@cdktn/provider-awscc'

iotSoftwarePackageVersion.IotSoftwarePackageVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotSoftwarePackageVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotSoftwarePackageVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotSoftwarePackageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_software_package_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotSoftwarePackageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.artifact">artifact</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference">IotSoftwarePackageVersionArtifactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.errorReason">errorReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.packageVersionArn">packageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.sbom">sbom</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference">IotSoftwarePackageVersionSbomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.sbomValidationStatus">sbomValidationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList">IotSoftwarePackageVersionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.artifactInput">artifactInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact">IotSoftwarePackageVersionArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.attributesInput">attributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.packageNameInput">packageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.recipeInput">recipeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.sbomInput">sbomInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom">IotSoftwarePackageVersionSbom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.versionNameInput">versionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.packageName">packageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.recipe">recipe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.versionName">versionName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `artifact`<sup>Required</sup> <a name="artifact" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.artifact"></a>

```typescript
public readonly artifact: IotSoftwarePackageVersionArtifactOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference">IotSoftwarePackageVersionArtifactOutputReference</a>

---

##### `errorReason`<sup>Required</sup> <a name="errorReason" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.errorReason"></a>

```typescript
public readonly errorReason: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `packageVersionArn`<sup>Required</sup> <a name="packageVersionArn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.packageVersionArn"></a>

```typescript
public readonly packageVersionArn: string;
```

- *Type:* string

---

##### `sbom`<sup>Required</sup> <a name="sbom" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.sbom"></a>

```typescript
public readonly sbom: IotSoftwarePackageVersionSbomOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference">IotSoftwarePackageVersionSbomOutputReference</a>

---

##### `sbomValidationStatus`<sup>Required</sup> <a name="sbomValidationStatus" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.sbomValidationStatus"></a>

```typescript
public readonly sbomValidationStatus: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.tags"></a>

```typescript
public readonly tags: IotSoftwarePackageVersionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList">IotSoftwarePackageVersionTagsList</a>

---

##### `artifactInput`<sup>Optional</sup> <a name="artifactInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.artifactInput"></a>

```typescript
public readonly artifactInput: IResolvable | IotSoftwarePackageVersionArtifact;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact">IotSoftwarePackageVersionArtifact</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.attributesInput"></a>

```typescript
public readonly attributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `packageNameInput`<sup>Optional</sup> <a name="packageNameInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.packageNameInput"></a>

```typescript
public readonly packageNameInput: string;
```

- *Type:* string

---

##### `recipeInput`<sup>Optional</sup> <a name="recipeInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.recipeInput"></a>

```typescript
public readonly recipeInput: string;
```

- *Type:* string

---

##### `sbomInput`<sup>Optional</sup> <a name="sbomInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.sbomInput"></a>

```typescript
public readonly sbomInput: IResolvable | IotSoftwarePackageVersionSbom;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom">IotSoftwarePackageVersionSbom</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotSoftwarePackageVersionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>[]

---

##### `versionNameInput`<sup>Optional</sup> <a name="versionNameInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.versionNameInput"></a>

```typescript
public readonly versionNameInput: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

---

##### `recipe`<sup>Required</sup> <a name="recipe" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.recipe"></a>

```typescript
public readonly recipe: string;
```

- *Type:* string

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotSoftwarePackageVersionArtifact <a name="IotSoftwarePackageVersionArtifact" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact.Initializer"></a>

```typescript
import { iotSoftwarePackageVersion } from '@cdktn/provider-awscc'

const iotSoftwarePackageVersionArtifact: iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location">IotSoftwarePackageVersionArtifactS3Location</a></code> | The Amazon S3 location. |

---

##### `s3Location`<sup>Optional</sup> <a name="s3Location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact.property.s3Location"></a>

```typescript
public readonly s3Location: IotSoftwarePackageVersionArtifactS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location">IotSoftwarePackageVersionArtifactS3Location</a>

The Amazon S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_software_package_version#s3_location IotSoftwarePackageVersion#s3_location}

---

### IotSoftwarePackageVersionArtifactS3Location <a name="IotSoftwarePackageVersionArtifactS3Location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location.Initializer"></a>

```typescript
import { iotSoftwarePackageVersion } from '@cdktn/provider-awscc'

const iotSoftwarePackageVersionArtifactS3Location: iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location.property.bucket">bucket</a></code> | <code>string</code> | The S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location.property.key">key</a></code> | <code>string</code> | The S3 key. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location.property.version">version</a></code> | <code>string</code> | The S3 version. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_software_package_version#bucket IotSoftwarePackageVersion#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The S3 key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_software_package_version#key IotSoftwarePackageVersion#key}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The S3 version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_software_package_version#version IotSoftwarePackageVersion#version}

---

### IotSoftwarePackageVersionConfig <a name="IotSoftwarePackageVersionConfig" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.Initializer"></a>

```typescript
import { iotSoftwarePackageVersion } from '@cdktn/provider-awscc'

const iotSoftwarePackageVersionConfig: iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.packageName">packageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_software_package_version#package_name IotSoftwarePackageVersion#package_name}. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.artifact">artifact</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact">IotSoftwarePackageVersionArtifact</a></code> | The artifact location of the package version. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_software_package_version#attributes IotSoftwarePackageVersion#attributes}. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_software_package_version#description IotSoftwarePackageVersion#description}. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.recipe">recipe</a></code> | <code>string</code> | The inline json job document associated with a software package version. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.sbom">sbom</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom">IotSoftwarePackageVersionSbom</a></code> | The sbom zip archive location of the package version. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.versionName">versionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_software_package_version#version_name IotSoftwarePackageVersion#version_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_software_package_version#package_name IotSoftwarePackageVersion#package_name}.

---

##### `artifact`<sup>Optional</sup> <a name="artifact" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.artifact"></a>

```typescript
public readonly artifact: IotSoftwarePackageVersionArtifact;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact">IotSoftwarePackageVersionArtifact</a>

The artifact location of the package version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_software_package_version#artifact IotSoftwarePackageVersion#artifact}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_software_package_version#attributes IotSoftwarePackageVersion#attributes}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_software_package_version#description IotSoftwarePackageVersion#description}.

---

##### `recipe`<sup>Optional</sup> <a name="recipe" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.recipe"></a>

```typescript
public readonly recipe: string;
```

- *Type:* string

The inline json job document associated with a software package version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_software_package_version#recipe IotSoftwarePackageVersion#recipe}

---

##### `sbom`<sup>Optional</sup> <a name="sbom" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.sbom"></a>

```typescript
public readonly sbom: IotSoftwarePackageVersionSbom;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom">IotSoftwarePackageVersionSbom</a>

The sbom zip archive location of the package version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_software_package_version#sbom IotSoftwarePackageVersion#sbom}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotSoftwarePackageVersionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_software_package_version#tags IotSoftwarePackageVersion#tags}

---

##### `versionName`<sup>Optional</sup> <a name="versionName" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_software_package_version#version_name IotSoftwarePackageVersion#version_name}.

---

### IotSoftwarePackageVersionSbom <a name="IotSoftwarePackageVersionSbom" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom.Initializer"></a>

```typescript
import { iotSoftwarePackageVersion } from '@cdktn/provider-awscc'

const iotSoftwarePackageVersionSbom: iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location">IotSoftwarePackageVersionSbomS3Location</a></code> | The Amazon S3 location. |

---

##### `s3Location`<sup>Optional</sup> <a name="s3Location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom.property.s3Location"></a>

```typescript
public readonly s3Location: IotSoftwarePackageVersionSbomS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location">IotSoftwarePackageVersionSbomS3Location</a>

The Amazon S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_software_package_version#s3_location IotSoftwarePackageVersion#s3_location}

---

### IotSoftwarePackageVersionSbomS3Location <a name="IotSoftwarePackageVersionSbomS3Location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location.Initializer"></a>

```typescript
import { iotSoftwarePackageVersion } from '@cdktn/provider-awscc'

const iotSoftwarePackageVersionSbomS3Location: iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location.property.bucket">bucket</a></code> | <code>string</code> | The S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location.property.key">key</a></code> | <code>string</code> | The S3 key. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location.property.version">version</a></code> | <code>string</code> | The S3 version. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_software_package_version#bucket IotSoftwarePackageVersion#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The S3 key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_software_package_version#key IotSoftwarePackageVersion#key}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The S3 version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_software_package_version#version IotSoftwarePackageVersion#version}

---

### IotSoftwarePackageVersionTags <a name="IotSoftwarePackageVersionTags" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags.Initializer"></a>

```typescript
import { iotSoftwarePackageVersion } from '@cdktn/provider-awscc'

const iotSoftwarePackageVersionTags: iotSoftwarePackageVersion.IotSoftwarePackageVersionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_software_package_version#key IotSoftwarePackageVersion#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_software_package_version#value IotSoftwarePackageVersion#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotSoftwarePackageVersionArtifactOutputReference <a name="IotSoftwarePackageVersionArtifactOutputReference" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.Initializer"></a>

```typescript
import { iotSoftwarePackageVersion } from '@cdktn/provider-awscc'

new iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.putS3Location">putS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.resetS3Location">resetS3Location</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Location` <a name="putS3Location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.putS3Location"></a>

```typescript
public putS3Location(value: IotSoftwarePackageVersionArtifactS3Location): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.putS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location">IotSoftwarePackageVersionArtifactS3Location</a>

---

##### `resetS3Location` <a name="resetS3Location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.resetS3Location"></a>

```typescript
public resetS3Location(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference">IotSoftwarePackageVersionArtifactS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.s3LocationInput">s3LocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location">IotSoftwarePackageVersionArtifactS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact">IotSoftwarePackageVersionArtifact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Location`<sup>Required</sup> <a name="s3Location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.s3Location"></a>

```typescript
public readonly s3Location: IotSoftwarePackageVersionArtifactS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference">IotSoftwarePackageVersionArtifactS3LocationOutputReference</a>

---

##### `s3LocationInput`<sup>Optional</sup> <a name="s3LocationInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.s3LocationInput"></a>

```typescript
public readonly s3LocationInput: IResolvable | IotSoftwarePackageVersionArtifactS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location">IotSoftwarePackageVersionArtifactS3Location</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSoftwarePackageVersionArtifact;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact">IotSoftwarePackageVersionArtifact</a>

---


### IotSoftwarePackageVersionArtifactS3LocationOutputReference <a name="IotSoftwarePackageVersionArtifactS3LocationOutputReference" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer"></a>

```typescript
import { iotSoftwarePackageVersion } from '@cdktn/provider-awscc'

new iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location">IotSoftwarePackageVersionArtifactS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSoftwarePackageVersionArtifactS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location">IotSoftwarePackageVersionArtifactS3Location</a>

---


### IotSoftwarePackageVersionSbomOutputReference <a name="IotSoftwarePackageVersionSbomOutputReference" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.Initializer"></a>

```typescript
import { iotSoftwarePackageVersion } from '@cdktn/provider-awscc'

new iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.putS3Location">putS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.resetS3Location">resetS3Location</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Location` <a name="putS3Location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.putS3Location"></a>

```typescript
public putS3Location(value: IotSoftwarePackageVersionSbomS3Location): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.putS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location">IotSoftwarePackageVersionSbomS3Location</a>

---

##### `resetS3Location` <a name="resetS3Location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.resetS3Location"></a>

```typescript
public resetS3Location(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference">IotSoftwarePackageVersionSbomS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.s3LocationInput">s3LocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location">IotSoftwarePackageVersionSbomS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom">IotSoftwarePackageVersionSbom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Location`<sup>Required</sup> <a name="s3Location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.s3Location"></a>

```typescript
public readonly s3Location: IotSoftwarePackageVersionSbomS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference">IotSoftwarePackageVersionSbomS3LocationOutputReference</a>

---

##### `s3LocationInput`<sup>Optional</sup> <a name="s3LocationInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.s3LocationInput"></a>

```typescript
public readonly s3LocationInput: IResolvable | IotSoftwarePackageVersionSbomS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location">IotSoftwarePackageVersionSbomS3Location</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSoftwarePackageVersionSbom;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom">IotSoftwarePackageVersionSbom</a>

---


### IotSoftwarePackageVersionSbomS3LocationOutputReference <a name="IotSoftwarePackageVersionSbomS3LocationOutputReference" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer"></a>

```typescript
import { iotSoftwarePackageVersion } from '@cdktn/provider-awscc'

new iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location">IotSoftwarePackageVersionSbomS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSoftwarePackageVersionSbomS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location">IotSoftwarePackageVersionSbomS3Location</a>

---


### IotSoftwarePackageVersionTagsList <a name="IotSoftwarePackageVersionTagsList" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.Initializer"></a>

```typescript
import { iotSoftwarePackageVersion } from '@cdktn/provider-awscc'

new iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.get"></a>

```typescript
public get(index: number): IotSoftwarePackageVersionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSoftwarePackageVersionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>[]

---


### IotSoftwarePackageVersionTagsOutputReference <a name="IotSoftwarePackageVersionTagsOutputReference" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer"></a>

```typescript
import { iotSoftwarePackageVersion } from '@cdktn/provider-awscc'

new iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSoftwarePackageVersionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>

---



