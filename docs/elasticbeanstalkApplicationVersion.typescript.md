# `elasticbeanstalkApplicationVersion` Submodule <a name="`elasticbeanstalkApplicationVersion` Submodule" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticbeanstalkApplicationVersion <a name="ElasticbeanstalkApplicationVersion" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version awscc_elasticbeanstalk_application_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer"></a>

```typescript
import { elasticbeanstalkApplicationVersion } from '@cdktn/provider-awscc'

new elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion(scope: Construct, id: string, config: ElasticbeanstalkApplicationVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig">ElasticbeanstalkApplicationVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig">ElasticbeanstalkApplicationVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putBuildConfiguration">putBuildConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putImageConfiguration">putImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putSourceBundle">putSourceBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetBuildConfiguration">resetBuildConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetImageConfiguration">resetImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetProcess">resetProcess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetSourceBundle">resetSourceBundle</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBuildConfiguration` <a name="putBuildConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putBuildConfiguration"></a>

```typescript
public putBuildConfiguration(value: ElasticbeanstalkApplicationVersionBuildConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putBuildConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a>

---

##### `putImageConfiguration` <a name="putImageConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putImageConfiguration"></a>

```typescript
public putImageConfiguration(value: ElasticbeanstalkApplicationVersionImageConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putImageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a>

---

##### `putSourceBundle` <a name="putSourceBundle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putSourceBundle"></a>

```typescript
public putSourceBundle(value: ElasticbeanstalkApplicationVersionSourceBundle): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putSourceBundle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a>

---

##### `resetBuildConfiguration` <a name="resetBuildConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetBuildConfiguration"></a>

```typescript
public resetBuildConfiguration(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetImageConfiguration` <a name="resetImageConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetImageConfiguration"></a>

```typescript
public resetImageConfiguration(): void
```

##### `resetProcess` <a name="resetProcess" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetProcess"></a>

```typescript
public resetProcess(): void
```

##### `resetSourceBundle` <a name="resetSourceBundle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetSourceBundle"></a>

```typescript
public resetSourceBundle(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticbeanstalkApplicationVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isConstruct"></a>

```typescript
import { elasticbeanstalkApplicationVersion } from '@cdktn/provider-awscc'

elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformElement"></a>

```typescript
import { elasticbeanstalkApplicationVersion } from '@cdktn/provider-awscc'

elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformResource"></a>

```typescript
import { elasticbeanstalkApplicationVersion } from '@cdktn/provider-awscc'

elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport"></a>

```typescript
import { elasticbeanstalkApplicationVersion } from '@cdktn/provider-awscc'

elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ElasticbeanstalkApplicationVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticbeanstalkApplicationVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticbeanstalkApplicationVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ElasticbeanstalkApplicationVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.applicationVersionId">applicationVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.buildConfiguration">buildConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference">ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.imageConfiguration">imageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference">ElasticbeanstalkApplicationVersionImageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.sourceBundle">sourceBundle</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference">ElasticbeanstalkApplicationVersionSourceBundleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.applicationNameInput">applicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.buildConfigurationInput">buildConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.imageConfigurationInput">imageConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.processInput">processInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.sourceBundleInput">sourceBundleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.applicationName">applicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.process">process</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationVersionId`<sup>Required</sup> <a name="applicationVersionId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.applicationVersionId"></a>

```typescript
public readonly applicationVersionId: string;
```

- *Type:* string

---

##### `buildConfiguration`<sup>Required</sup> <a name="buildConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.buildConfiguration"></a>

```typescript
public readonly buildConfiguration: ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference">ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageConfiguration`<sup>Required</sup> <a name="imageConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.imageConfiguration"></a>

```typescript
public readonly imageConfiguration: ElasticbeanstalkApplicationVersionImageConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference">ElasticbeanstalkApplicationVersionImageConfigurationOutputReference</a>

---

##### `sourceBundle`<sup>Required</sup> <a name="sourceBundle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.sourceBundle"></a>

```typescript
public readonly sourceBundle: ElasticbeanstalkApplicationVersionSourceBundleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference">ElasticbeanstalkApplicationVersionSourceBundleOutputReference</a>

---

##### `applicationNameInput`<sup>Optional</sup> <a name="applicationNameInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.applicationNameInput"></a>

```typescript
public readonly applicationNameInput: string;
```

- *Type:* string

---

##### `buildConfigurationInput`<sup>Optional</sup> <a name="buildConfigurationInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.buildConfigurationInput"></a>

```typescript
public readonly buildConfigurationInput: IResolvable | ElasticbeanstalkApplicationVersionBuildConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `imageConfigurationInput`<sup>Optional</sup> <a name="imageConfigurationInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.imageConfigurationInput"></a>

```typescript
public readonly imageConfigurationInput: IResolvable | ElasticbeanstalkApplicationVersionImageConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a>

---

##### `processInput`<sup>Optional</sup> <a name="processInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.processInput"></a>

```typescript
public readonly processInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sourceBundleInput`<sup>Optional</sup> <a name="sourceBundleInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.sourceBundleInput"></a>

```typescript
public readonly sourceBundleInput: IResolvable | ElasticbeanstalkApplicationVersionSourceBundle;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a>

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `process`<sup>Required</sup> <a name="process" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.process"></a>

```typescript
public readonly process: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticbeanstalkApplicationVersionBuildConfiguration <a name="ElasticbeanstalkApplicationVersionBuildConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.Initializer"></a>

```typescript
import { elasticbeanstalkApplicationVersion } from '@cdktn/provider-awscc'

const elasticbeanstalkApplicationVersionBuildConfiguration: elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.artifactName">artifactName</a></code> | <code>string</code> | The name of the build artifact. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.codeBuildServiceRole">codeBuildServiceRole</a></code> | <code>string</code> | The ARN of the IAM role that AWS CodeBuild assumes to build the application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.computeType">computeType</a></code> | <code>string</code> | The compute type for the CodeBuild build environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.image">image</a></code> | <code>string</code> | The CodeBuild image used for the build environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>number</code> | The timeout for the CodeBuild build, in minutes. |

---

##### `artifactName`<sup>Optional</sup> <a name="artifactName" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.artifactName"></a>

```typescript
public readonly artifactName: string;
```

- *Type:* string

The name of the build artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#artifact_name ElasticbeanstalkApplicationVersion#artifact_name}

---

##### `codeBuildServiceRole`<sup>Optional</sup> <a name="codeBuildServiceRole" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.codeBuildServiceRole"></a>

```typescript
public readonly codeBuildServiceRole: string;
```

- *Type:* string

The ARN of the IAM role that AWS CodeBuild assumes to build the application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#code_build_service_role ElasticbeanstalkApplicationVersion#code_build_service_role}

---

##### `computeType`<sup>Optional</sup> <a name="computeType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.computeType"></a>

```typescript
public readonly computeType: string;
```

- *Type:* string

The compute type for the CodeBuild build environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#compute_type ElasticbeanstalkApplicationVersion#compute_type}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

The CodeBuild image used for the build environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#image ElasticbeanstalkApplicationVersion#image}

---

##### `timeoutInMinutes`<sup>Optional</sup> <a name="timeoutInMinutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.timeoutInMinutes"></a>

```typescript
public readonly timeoutInMinutes: number;
```

- *Type:* number

The timeout for the CodeBuild build, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#timeout_in_minutes ElasticbeanstalkApplicationVersion#timeout_in_minutes}

---

### ElasticbeanstalkApplicationVersionConfig <a name="ElasticbeanstalkApplicationVersionConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.Initializer"></a>

```typescript
import { elasticbeanstalkApplicationVersion } from '@cdktn/provider-awscc'

const elasticbeanstalkApplicationVersionConfig: elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.applicationName">applicationName</a></code> | <code>string</code> | The name of the Elastic Beanstalk application that is associated with this application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.buildConfiguration">buildConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a></code> | Settings for an AWS CodeBuild build that packages and builds an application version from source code. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.description">description</a></code> | <code>string</code> | A description of this application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.imageConfiguration">imageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a></code> | Configuration for image-based application versions. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.process">process</a></code> | <code>boolean \| cdktn.IResolvable</code> | Pre-process and validate the environment manifest (`env.yaml`) and configuration files in the source bundle. Leave unset for the service default. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.sourceBundle">sourceBundle</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a></code> | The Amazon S3 bucket and key that identify the location of the source bundle for this version. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The name of the Elastic Beanstalk application that is associated with this application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#application_name ElasticbeanstalkApplicationVersion#application_name}

---

##### `buildConfiguration`<sup>Optional</sup> <a name="buildConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.buildConfiguration"></a>

```typescript
public readonly buildConfiguration: ElasticbeanstalkApplicationVersionBuildConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a>

Settings for an AWS CodeBuild build that packages and builds an application version from source code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#build_configuration ElasticbeanstalkApplicationVersion#build_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of this application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#description ElasticbeanstalkApplicationVersion#description}

---

##### `imageConfiguration`<sup>Optional</sup> <a name="imageConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.imageConfiguration"></a>

```typescript
public readonly imageConfiguration: ElasticbeanstalkApplicationVersionImageConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a>

Configuration for image-based application versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#image_configuration ElasticbeanstalkApplicationVersion#image_configuration}

---

##### `process`<sup>Optional</sup> <a name="process" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.process"></a>

```typescript
public readonly process: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Pre-process and validate the environment manifest (`env.yaml`) and configuration files in the source bundle. Leave unset for the service default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#process ElasticbeanstalkApplicationVersion#process}

---

##### `sourceBundle`<sup>Optional</sup> <a name="sourceBundle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.sourceBundle"></a>

```typescript
public readonly sourceBundle: ElasticbeanstalkApplicationVersionSourceBundle;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a>

The Amazon S3 bucket and key that identify the location of the source bundle for this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#source_bundle ElasticbeanstalkApplicationVersion#source_bundle}

---

### ElasticbeanstalkApplicationVersionImageConfiguration <a name="ElasticbeanstalkApplicationVersionImageConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration.Initializer"></a>

```typescript
import { elasticbeanstalkApplicationVersion } from '@cdktn/provider-awscc'

const elasticbeanstalkApplicationVersionImageConfiguration: elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration.property.buildAttribute">buildAttribute</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a></code> | Configuration for building a container image from source code. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a></code> | The container image source for this version, as an ECR image URI. |

---

##### `buildAttribute`<sup>Optional</sup> <a name="buildAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration.property.buildAttribute"></a>

```typescript
public readonly buildAttribute: ElasticbeanstalkApplicationVersionImageConfigurationBuild;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a>

Configuration for building a container image from source code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#build ElasticbeanstalkApplicationVersion#build}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration.property.source"></a>

```typescript
public readonly source: ElasticbeanstalkApplicationVersionImageConfigurationSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a>

The container image source for this version, as an ECR image URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#source ElasticbeanstalkApplicationVersion#source}

---

### ElasticbeanstalkApplicationVersionImageConfigurationBuild <a name="ElasticbeanstalkApplicationVersionImageConfigurationBuild" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.Initializer"></a>

```typescript
import { elasticbeanstalkApplicationVersion } from '@cdktn/provider-awscc'

const elasticbeanstalkApplicationVersionImageConfigurationBuild: elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.architecture">architecture</a></code> | <code>string</code> | The target architecture for the built container image. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.buildpack">buildpack</a></code> | <code>string</code> | The buildpack to use for building the image. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.codeBuildServiceRole">codeBuildServiceRole</a></code> | <code>string</code> | The ARN of the IAM role that AWS CodeBuild assumes to build the application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.computeType">computeType</a></code> | <code>string</code> | The compute type for the CodeBuild build environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.dockerfileLocation">dockerfileLocation</a></code> | <code>string</code> | The path to the Dockerfile, relative to the source root. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>number</code> | The timeout for the CodeBuild build, in minutes. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.type">type</a></code> | <code>string</code> | The type of image build: docker or buildpack. |

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

The target architecture for the built container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#architecture ElasticbeanstalkApplicationVersion#architecture}

---

##### `buildpack`<sup>Optional</sup> <a name="buildpack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.buildpack"></a>

```typescript
public readonly buildpack: string;
```

- *Type:* string

The buildpack to use for building the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#buildpack ElasticbeanstalkApplicationVersion#buildpack}

---

##### `codeBuildServiceRole`<sup>Optional</sup> <a name="codeBuildServiceRole" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.codeBuildServiceRole"></a>

```typescript
public readonly codeBuildServiceRole: string;
```

- *Type:* string

The ARN of the IAM role that AWS CodeBuild assumes to build the application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#code_build_service_role ElasticbeanstalkApplicationVersion#code_build_service_role}

---

##### `computeType`<sup>Optional</sup> <a name="computeType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.computeType"></a>

```typescript
public readonly computeType: string;
```

- *Type:* string

The compute type for the CodeBuild build environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#compute_type ElasticbeanstalkApplicationVersion#compute_type}

---

##### `dockerfileLocation`<sup>Optional</sup> <a name="dockerfileLocation" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.dockerfileLocation"></a>

```typescript
public readonly dockerfileLocation: string;
```

- *Type:* string

The path to the Dockerfile, relative to the source root.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#dockerfile_location ElasticbeanstalkApplicationVersion#dockerfile_location}

---

##### `timeoutInMinutes`<sup>Optional</sup> <a name="timeoutInMinutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.timeoutInMinutes"></a>

```typescript
public readonly timeoutInMinutes: number;
```

- *Type:* number

The timeout for the CodeBuild build, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#timeout_in_minutes ElasticbeanstalkApplicationVersion#timeout_in_minutes}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of image build: docker or buildpack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#type ElasticbeanstalkApplicationVersion#type}

---

### ElasticbeanstalkApplicationVersionImageConfigurationSource <a name="ElasticbeanstalkApplicationVersionImageConfigurationSource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource.Initializer"></a>

```typescript
import { elasticbeanstalkApplicationVersion } from '@cdktn/provider-awscc'

const elasticbeanstalkApplicationVersionImageConfigurationSource: elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource.property.uri">uri</a></code> | <code>string</code> | The URI of the container image, e.g. an ECR image URI. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The URI of the container image, e.g. an ECR image URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#uri ElasticbeanstalkApplicationVersion#uri}

---

### ElasticbeanstalkApplicationVersionSourceBundle <a name="ElasticbeanstalkApplicationVersionSourceBundle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle.Initializer"></a>

```typescript
import { elasticbeanstalkApplicationVersion } from '@cdktn/provider-awscc'

const elasticbeanstalkApplicationVersionSourceBundle: elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | The Amazon S3 bucket where the data is located. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle.property.s3Key">s3Key</a></code> | <code>string</code> | The Amazon S3 key where the data is located. |

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

The Amazon S3 bucket where the data is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#s3_bucket ElasticbeanstalkApplicationVersion#s3_bucket}

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

The Amazon S3 key where the data is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#s3_key ElasticbeanstalkApplicationVersion#s3_key}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference <a name="ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer"></a>

```typescript
import { elasticbeanstalkApplicationVersion } from '@cdktn/provider-awscc'

new elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetArtifactName">resetArtifactName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetCodeBuildServiceRole">resetCodeBuildServiceRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetComputeType">resetComputeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetTimeoutInMinutes">resetTimeoutInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArtifactName` <a name="resetArtifactName" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetArtifactName"></a>

```typescript
public resetArtifactName(): void
```

##### `resetCodeBuildServiceRole` <a name="resetCodeBuildServiceRole" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetCodeBuildServiceRole"></a>

```typescript
public resetCodeBuildServiceRole(): void
```

##### `resetComputeType` <a name="resetComputeType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetComputeType"></a>

```typescript
public resetComputeType(): void
```

##### `resetImage` <a name="resetImage" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetImage"></a>

```typescript
public resetImage(): void
```

##### `resetTimeoutInMinutes` <a name="resetTimeoutInMinutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetTimeoutInMinutes"></a>

```typescript
public resetTimeoutInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.artifactNameInput">artifactNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.codeBuildServiceRoleInput">codeBuildServiceRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.computeTypeInput">computeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.timeoutInMinutesInput">timeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.artifactName">artifactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.codeBuildServiceRole">codeBuildServiceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.computeType">computeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `artifactNameInput`<sup>Optional</sup> <a name="artifactNameInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.artifactNameInput"></a>

```typescript
public readonly artifactNameInput: string;
```

- *Type:* string

---

##### `codeBuildServiceRoleInput`<sup>Optional</sup> <a name="codeBuildServiceRoleInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.codeBuildServiceRoleInput"></a>

```typescript
public readonly codeBuildServiceRoleInput: string;
```

- *Type:* string

---

##### `computeTypeInput`<sup>Optional</sup> <a name="computeTypeInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.computeTypeInput"></a>

```typescript
public readonly computeTypeInput: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `timeoutInMinutesInput`<sup>Optional</sup> <a name="timeoutInMinutesInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.timeoutInMinutesInput"></a>

```typescript
public readonly timeoutInMinutesInput: number;
```

- *Type:* number

---

##### `artifactName`<sup>Required</sup> <a name="artifactName" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.artifactName"></a>

```typescript
public readonly artifactName: string;
```

- *Type:* string

---

##### `codeBuildServiceRole`<sup>Required</sup> <a name="codeBuildServiceRole" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.codeBuildServiceRole"></a>

```typescript
public readonly codeBuildServiceRole: string;
```

- *Type:* string

---

##### `computeType`<sup>Required</sup> <a name="computeType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.computeType"></a>

```typescript
public readonly computeType: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `timeoutInMinutes`<sup>Required</sup> <a name="timeoutInMinutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.timeoutInMinutes"></a>

```typescript
public readonly timeoutInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticbeanstalkApplicationVersionBuildConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a>

---


### ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference <a name="ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer"></a>

```typescript
import { elasticbeanstalkApplicationVersion } from '@cdktn/provider-awscc'

new elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetArchitecture">resetArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetBuildpack">resetBuildpack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetCodeBuildServiceRole">resetCodeBuildServiceRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetComputeType">resetComputeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetDockerfileLocation">resetDockerfileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetTimeoutInMinutes">resetTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArchitecture` <a name="resetArchitecture" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetArchitecture"></a>

```typescript
public resetArchitecture(): void
```

##### `resetBuildpack` <a name="resetBuildpack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetBuildpack"></a>

```typescript
public resetBuildpack(): void
```

##### `resetCodeBuildServiceRole` <a name="resetCodeBuildServiceRole" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetCodeBuildServiceRole"></a>

```typescript
public resetCodeBuildServiceRole(): void
```

##### `resetComputeType` <a name="resetComputeType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetComputeType"></a>

```typescript
public resetComputeType(): void
```

##### `resetDockerfileLocation` <a name="resetDockerfileLocation" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetDockerfileLocation"></a>

```typescript
public resetDockerfileLocation(): void
```

##### `resetTimeoutInMinutes` <a name="resetTimeoutInMinutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetTimeoutInMinutes"></a>

```typescript
public resetTimeoutInMinutes(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.architectureInput">architectureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.buildpackInput">buildpackInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.codeBuildServiceRoleInput">codeBuildServiceRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.computeTypeInput">computeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.dockerfileLocationInput">dockerfileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.timeoutInMinutesInput">timeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.buildpack">buildpack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.codeBuildServiceRole">codeBuildServiceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.computeType">computeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.dockerfileLocation">dockerfileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `architectureInput`<sup>Optional</sup> <a name="architectureInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.architectureInput"></a>

```typescript
public readonly architectureInput: string;
```

- *Type:* string

---

##### `buildpackInput`<sup>Optional</sup> <a name="buildpackInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.buildpackInput"></a>

```typescript
public readonly buildpackInput: string;
```

- *Type:* string

---

##### `codeBuildServiceRoleInput`<sup>Optional</sup> <a name="codeBuildServiceRoleInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.codeBuildServiceRoleInput"></a>

```typescript
public readonly codeBuildServiceRoleInput: string;
```

- *Type:* string

---

##### `computeTypeInput`<sup>Optional</sup> <a name="computeTypeInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.computeTypeInput"></a>

```typescript
public readonly computeTypeInput: string;
```

- *Type:* string

---

##### `dockerfileLocationInput`<sup>Optional</sup> <a name="dockerfileLocationInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.dockerfileLocationInput"></a>

```typescript
public readonly dockerfileLocationInput: string;
```

- *Type:* string

---

##### `timeoutInMinutesInput`<sup>Optional</sup> <a name="timeoutInMinutesInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.timeoutInMinutesInput"></a>

```typescript
public readonly timeoutInMinutesInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `buildpack`<sup>Required</sup> <a name="buildpack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.buildpack"></a>

```typescript
public readonly buildpack: string;
```

- *Type:* string

---

##### `codeBuildServiceRole`<sup>Required</sup> <a name="codeBuildServiceRole" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.codeBuildServiceRole"></a>

```typescript
public readonly codeBuildServiceRole: string;
```

- *Type:* string

---

##### `computeType`<sup>Required</sup> <a name="computeType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.computeType"></a>

```typescript
public readonly computeType: string;
```

- *Type:* string

---

##### `dockerfileLocation`<sup>Required</sup> <a name="dockerfileLocation" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.dockerfileLocation"></a>

```typescript
public readonly dockerfileLocation: string;
```

- *Type:* string

---

##### `timeoutInMinutes`<sup>Required</sup> <a name="timeoutInMinutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.timeoutInMinutes"></a>

```typescript
public readonly timeoutInMinutes: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticbeanstalkApplicationVersionImageConfigurationBuild;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a>

---


### ElasticbeanstalkApplicationVersionImageConfigurationOutputReference <a name="ElasticbeanstalkApplicationVersionImageConfigurationOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer"></a>

```typescript
import { elasticbeanstalkApplicationVersion } from '@cdktn/provider-awscc'

new elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putBuildAttribute">putBuildAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resetBuildAttribute">resetBuildAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBuildAttribute` <a name="putBuildAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putBuildAttribute"></a>

```typescript
public putBuildAttribute(value: ElasticbeanstalkApplicationVersionImageConfigurationBuild): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putBuildAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a>

---

##### `putSource` <a name="putSource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putSource"></a>

```typescript
public putSource(value: ElasticbeanstalkApplicationVersionImageConfigurationSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a>

---

##### `resetBuildAttribute` <a name="resetBuildAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resetBuildAttribute"></a>

```typescript
public resetBuildAttribute(): void
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.buildAttribute">buildAttribute</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference">ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference">ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.buildAttributeInput">buildAttributeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.sourceInput">sourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buildAttribute`<sup>Required</sup> <a name="buildAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.buildAttribute"></a>

```typescript
public readonly buildAttribute: ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference">ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.source"></a>

```typescript
public readonly source: ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference">ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference</a>

---

##### `buildAttributeInput`<sup>Optional</sup> <a name="buildAttributeInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.buildAttributeInput"></a>

```typescript
public readonly buildAttributeInput: IResolvable | ElasticbeanstalkApplicationVersionImageConfigurationBuild;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | ElasticbeanstalkApplicationVersionImageConfigurationSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticbeanstalkApplicationVersionImageConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a>

---


### ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference <a name="ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer"></a>

```typescript
import { elasticbeanstalkApplicationVersion } from '@cdktn/provider-awscc'

new elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUri` <a name="resetUri" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.resetUri"></a>

```typescript
public resetUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticbeanstalkApplicationVersionImageConfigurationSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a>

---


### ElasticbeanstalkApplicationVersionSourceBundleOutputReference <a name="ElasticbeanstalkApplicationVersionSourceBundleOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer"></a>

```typescript
import { elasticbeanstalkApplicationVersion } from '@cdktn/provider-awscc'

new elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resetS3Key">resetS3Key</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resetS3Bucket"></a>

```typescript
public resetS3Bucket(): void
```

##### `resetS3Key` <a name="resetS3Key" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resetS3Key"></a>

```typescript
public resetS3Key(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3Key">s3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3BucketInput"></a>

```typescript
public readonly s3BucketInput: string;
```

- *Type:* string

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3KeyInput"></a>

```typescript
public readonly s3KeyInput: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticbeanstalkApplicationVersionSourceBundle;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a>

---



