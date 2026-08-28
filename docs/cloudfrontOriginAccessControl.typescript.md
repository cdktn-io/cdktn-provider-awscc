# `cloudfrontOriginAccessControl` Submodule <a name="`cloudfrontOriginAccessControl` Submodule" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontOriginAccessControl <a name="CloudfrontOriginAccessControl" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_access_control awscc_cloudfront_origin_access_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer"></a>

```typescript
import { cloudfrontOriginAccessControl } from '@cdktn/provider-awscc'

new cloudfrontOriginAccessControl.CloudfrontOriginAccessControl(scope: Construct, id: string, config: CloudfrontOriginAccessControlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig">CloudfrontOriginAccessControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig">CloudfrontOriginAccessControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.putOriginAccessControlConfig">putOriginAccessControlConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOriginAccessControlConfig` <a name="putOriginAccessControlConfig" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.putOriginAccessControlConfig"></a>

```typescript
public putOriginAccessControlConfig(value: CloudfrontOriginAccessControlOriginAccessControlConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.putOriginAccessControlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig">CloudfrontOriginAccessControlOriginAccessControlConfig</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudfrontOriginAccessControl resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isConstruct"></a>

```typescript
import { cloudfrontOriginAccessControl } from '@cdktn/provider-awscc'

cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformElement"></a>

```typescript
import { cloudfrontOriginAccessControl } from '@cdktn/provider-awscc'

cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformResource"></a>

```typescript
import { cloudfrontOriginAccessControl } from '@cdktn/provider-awscc'

cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.generateConfigForImport"></a>

```typescript
import { cloudfrontOriginAccessControl } from '@cdktn/provider-awscc'

cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudfrontOriginAccessControl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudfrontOriginAccessControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudfrontOriginAccessControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_access_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontOriginAccessControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlConfig">originAccessControlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference">CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlId">originAccessControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlConfigInput">originAccessControlConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig">CloudfrontOriginAccessControlOriginAccessControlConfig</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `originAccessControlConfig`<sup>Required</sup> <a name="originAccessControlConfig" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlConfig"></a>

```typescript
public readonly originAccessControlConfig: CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference">CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference</a>

---

##### `originAccessControlId`<sup>Required</sup> <a name="originAccessControlId" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlId"></a>

```typescript
public readonly originAccessControlId: string;
```

- *Type:* string

---

##### `originAccessControlConfigInput`<sup>Optional</sup> <a name="originAccessControlConfigInput" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlConfigInput"></a>

```typescript
public readonly originAccessControlConfigInput: IResolvable | CloudfrontOriginAccessControlOriginAccessControlConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig">CloudfrontOriginAccessControlOriginAccessControlConfig</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontOriginAccessControlConfig <a name="CloudfrontOriginAccessControlConfig" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.Initializer"></a>

```typescript
import { cloudfrontOriginAccessControl } from '@cdktn/provider-awscc'

const cloudfrontOriginAccessControlConfig: cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.originAccessControlConfig">originAccessControlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig">CloudfrontOriginAccessControlOriginAccessControlConfig</a></code> | The origin access control. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `originAccessControlConfig`<sup>Required</sup> <a name="originAccessControlConfig" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.originAccessControlConfig"></a>

```typescript
public readonly originAccessControlConfig: CloudfrontOriginAccessControlOriginAccessControlConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig">CloudfrontOriginAccessControlOriginAccessControlConfig</a>

The origin access control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_access_control#origin_access_control_config CloudfrontOriginAccessControl#origin_access_control_config}

---

### CloudfrontOriginAccessControlOriginAccessControlConfig <a name="CloudfrontOriginAccessControlOriginAccessControlConfig" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.Initializer"></a>

```typescript
import { cloudfrontOriginAccessControl } from '@cdktn/provider-awscc'

const cloudfrontOriginAccessControlOriginAccessControlConfig: cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.name">name</a></code> | <code>string</code> | A name to identify the origin access control. You can specify up to 64 characters. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.originAccessControlOriginType">originAccessControlOriginType</a></code> | <code>string</code> | The type of origin that this origin access control is for. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.signingBehavior">signingBehavior</a></code> | <code>string</code> | Specifies which requests CloudFront signs (adds authentication information to). |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.signingProtocol">signingProtocol</a></code> | <code>string</code> | The signing protocol of the origin access control, which determines how CloudFront signs (authenticates) requests. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.description">description</a></code> | <code>string</code> | A description of the origin access control. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name to identify the origin access control. You can specify up to 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_access_control#name CloudfrontOriginAccessControl#name}

---

##### `originAccessControlOriginType`<sup>Required</sup> <a name="originAccessControlOriginType" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.originAccessControlOriginType"></a>

```typescript
public readonly originAccessControlOriginType: string;
```

- *Type:* string

The type of origin that this origin access control is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_access_control#origin_access_control_origin_type CloudfrontOriginAccessControl#origin_access_control_origin_type}

---

##### `signingBehavior`<sup>Required</sup> <a name="signingBehavior" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.signingBehavior"></a>

```typescript
public readonly signingBehavior: string;
```

- *Type:* string

Specifies which requests CloudFront signs (adds authentication information to).

Specify ``always`` for the most common use case. For more information, see [origin access control advanced settings](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#oac-advanced-settings) in the *Amazon CloudFront Developer Guide*.
 This field can have one of the following values:
  +  ``always`` ? CloudFront signs all origin requests, overwriting the ``Authorization`` header from the viewer request if one exists.
  +  ``never`` ? CloudFront doesn't sign any origin requests. This value turns off origin access control for all origins in all distributions that use this origin access control.
  +  ``no-override`` ? If the viewer request doesn't contain the ``Authorization`` header, then CloudFront signs the origin request. If the viewer request contains the ``Authorization`` header, then CloudFront doesn't sign the origin request and instead passes along the ``Authorization`` header from the viewer request. *WARNING: To pass along the Authorization header from the viewer request, you must add the Authorization header to a cache policy for all cache behaviors that use origins associated with this origin access control.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_access_control#signing_behavior CloudfrontOriginAccessControl#signing_behavior}

---

##### `signingProtocol`<sup>Required</sup> <a name="signingProtocol" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.signingProtocol"></a>

```typescript
public readonly signingProtocol: string;
```

- *Type:* string

The signing protocol of the origin access control, which determines how CloudFront signs (authenticates) requests.

The only valid value is ``sigv4``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_access_control#signing_protocol CloudfrontOriginAccessControl#signing_protocol}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the origin access control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_access_control#description CloudfrontOriginAccessControl#description}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference <a name="CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontOriginAccessControl } from '@cdktn/provider-awscc'

new cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.originAccessControlOriginTypeInput">originAccessControlOriginTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingBehaviorInput">signingBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingProtocolInput">signingProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.originAccessControlOriginType">originAccessControlOriginType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingBehavior">signingBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingProtocol">signingProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig">CloudfrontOriginAccessControlOriginAccessControlConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `originAccessControlOriginTypeInput`<sup>Optional</sup> <a name="originAccessControlOriginTypeInput" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.originAccessControlOriginTypeInput"></a>

```typescript
public readonly originAccessControlOriginTypeInput: string;
```

- *Type:* string

---

##### `signingBehaviorInput`<sup>Optional</sup> <a name="signingBehaviorInput" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingBehaviorInput"></a>

```typescript
public readonly signingBehaviorInput: string;
```

- *Type:* string

---

##### `signingProtocolInput`<sup>Optional</sup> <a name="signingProtocolInput" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingProtocolInput"></a>

```typescript
public readonly signingProtocolInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `originAccessControlOriginType`<sup>Required</sup> <a name="originAccessControlOriginType" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.originAccessControlOriginType"></a>

```typescript
public readonly originAccessControlOriginType: string;
```

- *Type:* string

---

##### `signingBehavior`<sup>Required</sup> <a name="signingBehavior" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingBehavior"></a>

```typescript
public readonly signingBehavior: string;
```

- *Type:* string

---

##### `signingProtocol`<sup>Required</sup> <a name="signingProtocol" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingProtocol"></a>

```typescript
public readonly signingProtocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontOriginAccessControlOriginAccessControlConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig">CloudfrontOriginAccessControlOriginAccessControlConfig</a>

---



